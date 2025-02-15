const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/AirBnB";
const { Listing, user } = require("./model/listing.js");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  resave : false,
  saveUninitialized : false,
  secret : "AirBnB"
}));

const isAuthenticated = (req, res, next) => {
  // const togle = req.session;
  if (req.session.loggedIn) next();
  else
    res.render("done", { msg: "LogIn or SignUp for Continue!", redirect: "" });
};

main()
  .then(() => {
    console.log("mongodb connected succesfull");
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
    }else if(checkUser.password !== password){
      res.render("done",{msg : "Password Incorrect! Please try again.", redirect : "login"});
    }else{
      req.session.loggedIn = true;
      res.redirect("/listing");
    }
  } catch (err) {
    res.render("done",{msg : "Something went wrong! Please try again later.", redirect : "login"})
    console.log("Something went wrong",err);
  }
});

app.get("/signUp", (req, res) => {
  res.render("signUp.ejs");
});

app.post("/checkSignUp", async (req, res) => {
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

app.get("/listing",isAuthenticated, async (req, res) => {
  const listings = await Listing.find({});
  res.render("listings.ejs", { listings });
});

app.get("/listing/new",isAuthenticated, (req, res) => {
  res.render("new.ejs");
});

app.get("/listing/:id",isAuthenticated, async (req, res) => {
  const id = req.params.id;
  const item = await Listing.findById(id);
  res.render("show.ejs", { item });
});

app.post("/create", isAuthenticated, async (req, res) => {
  console.log(req.body);
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

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
