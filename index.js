const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URL;
const { user } = require("./model/allUsers.js");
const { listing } = require("./model/allUsers.js");
const Listing = listing;
const session = require("express-session");
const port = process.env.PORT || 3000;

const initDB = require("./init/index.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  })
);

const isAuthenticated = (req, res, next) => {
  if (req.session.loggedIn) next();
  else
    res.render("done", {
      msg: "Please Do LogIn or SignUp for Continue!",
      redirect: "",
    });
};

main()
  .then(async () => {
    console.log("mongodb connected succesfull");
    await initDB();
  })
  .catch((err) => {
    console.log("database connection unsuccesfull! some error occur:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/checkLogin", async (req, res) => {
  req.session.loggedIn = false;
  try {
    const email = req.body.email,
      password = req.body.password;
    const checkUser = await user.findOne({
      email: email,
    });
    if (!checkUser) {
      res.render("done", {
        msg: "User not found! Please signUp.",
        redirect: "signUp",
      });
    } else if (checkUser.password !== password) {
      res.render("done", {
        msg: "Password Incorrect! Please try again.",
        redirect: "login",
      });
    } else {
      req.session.loggedIn = true;
      req.session.userId = checkUser._id;
      res.redirect("/listing");
    }
  } catch (err) {
    res.render("done", {
      msg: "Something went wrong! Please try again later.",
      redirect: "login",
    });
    console.log("Something went wrong", err);
  }
});

app.get("/signUp", (req, res) => {
  res.render("signUp.ejs");
});

app.post("/checkSignUp", async (req, res) => {
  req.session.loggedIn = false;
  try {
    const newUser = new user({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      country: req.body.country,
      contact: req.body.contact,
      gender: req.body.gender,
    });
    await newUser.save();
    console.log("New User Added SuccessFull!");
    res.status(201).render("done", {
      msg: "Congratulation You have SuccessFully Signed-Up! Remember Your Password & now Login",
      redirect: "login",
    });
  } catch (err) {
    if (err.code === 11000) {
      res.render("done", {
        msg: "Account already Exists with this Email.",
        redirect: "login",
      });
    } else {
      console.log(err);
      res.status(401).render("done", {
        msg: "Something went wrong! Sorry for inconvenience Please Try again.",
        redirect: "signUp",
      });
    }
  }
});

app.get("/profile/:name", isAuthenticated, async (req, res) => {
  const profileUser = await user.findOne({
    _id: req.session.userId,
  });
  req.params.name = profileUser.name;
  res.render("profile.ejs", { profileUser });
});

app.get("/edit-profile", isAuthenticated, async (req, res) => {
  const profileUser = await user.findOne({
    _id: req.session.userId,
  });
  res.render("edit-profile.ejs", { profileUser });
});

app.post("/update-profile", isAuthenticated, async (req, res) => {
  try {
    const profileUser = await user.findById(req.session.userId);

    if (!profileUser) {
      return res.status(404).send("User not found");
    }

    profileUser.email = req.body.email;
    profileUser.name = req.body.name;
    profileUser.country = req.body.country;
    profileUser.contact = req.body.contact;
    profileUser.gender = req.body.gender;

    await profileUser.save();

    res.redirect(`/profile/:${profileUser.name}`);
  } catch (err) {
    console.log("Something went wrong!", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/listing", async (req, res) => {
  const listings = await Listing.find({});
  const loggedInUser = await user.findOne({
    _id: req.session.userId,
  });
  res.render("listings.ejs", {
    listings: listings,
    loggedInUser: loggedInUser,
  });
});

app.get("/listing/new", isAuthenticated, (req, res) => {
  res.render("new.ejs");
});

app.get("/listing/:id", isAuthenticated, async (req, res) => {
  const id = req.params.id;
  const listings = await Listing.find({});
  const loggedInUser = await user.findOne({
    _id: req.session.userId,
  });
  const item = await Listing.findById(id);
  res.render("show.ejs", {
    item,
    listings: listings,
    loggedInUser: loggedInUser,
  });
});

app.get("/deleteListing/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Listing.deleteOne({ _id: id }); // <-- await is important here
    res.redirect("/listing");
  } catch (err) {
    console.log("Error deleting listing:", err);
    res.status(500).send("Failed to delete listing");
  }
});

app.get("/search", async (req, res) => {
  const searchQuery = req.query.query;

  const loggedInUser = await user.findOne({
    _id: req.session.userId,
  });
  const results = await Listing.find({
    $or: [
      { title: { $regex: searchQuery, $options: "i" } },
      { location: { $regex: searchQuery, $options: "i" } },
      { country: { $regex: searchQuery, $options: "i" } },
    ],
  });

  res.render("listings", {
    listings: results,
    loggedInUser: loggedInUser,
  });
});

app.post("/listing/booking/:id", isAuthenticated, async (req, res) => {
  const itemId = req.params.id;
  const loggedInUser = await user.findOne({
    _id: req.session.userId,
  });
  const item = await Listing.findById(itemId);

  res.render("bookingInfo", {
    price: req.body.price,
    country: req.body.country,
    location: req.body.location,
    checkin: req.body.checkin.toString(),
    checkout: req.body.checkout.toString(),
    guest: req.body.guest,
    item,
    loggedInUser: loggedInUser,
  });
});

app.post("/create", isAuthenticated, async (req, res) => {
  console.log(req.body);
  const loggedInUser = await user.findOne({
    _id: req.session.userId,
  });
  try {
    const newListing = new Listing({
      title: req.body.title,
      description: req.body.description,
      image: {
        url: req.body.url,
      },
      price: req.body.price,
      location: req.body.location,
      country: req.body.country,
      host: loggedInUser.name,
    });
    await newListing.save();
    console.log("New Listing Added SuccessFull!");
    res.status(201).render("done", {
      msg: "Congratulation Place Added SuccessFull!",
      redirect: "listing",
    });
  } catch (err) {
    console.log(err);
    res.status(400).render("done", {
      msg: "Something went Wrong! Failed during data Uploading Please Try Again..",
      redirect: "listing/new",
    });
  }
});

app.get("*", (req, res) => {
  res.send("Invalid Route!");
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/listing");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
