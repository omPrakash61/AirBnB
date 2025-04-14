const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  commenterName: { type: mongoose.Schema.Types.ObjectId, ref : "userSchema" },
  rating: { type: Number, required: true, min: 1, max: 5 },
  msg: { type: String }
});

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    filename: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1739286955038-a4e5ce4f9462?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  latitude: {
    type: String,
    trim: true,
  },
  longitude: {
    type: String,
    trim: true,
  },
  host: {
    type: String,
    required: true,
  },
  ratings: [ratingSchema],
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/6522/6522516.png",
  },
  country: {
    type: String,
    required : true,
  },
  contact : {
    type : Number,
    length : 10,
  },
  gender: String,
  isHost: {
    type: Boolean,
    default: false,
  },
  listings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],
});


const User = mongoose.models.user || mongoose.model("user", userSchema);
const listingModel = mongoose.model("listingModel", listingSchema);
const ratingModel = mongoose.model("ratingModel", ratingSchema);

console.log("Models Created Successfull!");

module.exports = {user : User , listing : listingModel, rating : ratingModel};

console.log("Module Exported!");