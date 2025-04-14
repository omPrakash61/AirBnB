const { sampleListings } = require("./data.js");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/AirBnB2";
const { listing } = require("../model/allUsers.js");

async function initDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("DB connected successfully!");

    await listing.deleteMany({});
    console.log("Old data deleted!");

    await listing.insertMany(sampleListings);
    console.log("All data inserted successfully!");
  } catch (err) {
    console.log("Error during DB operation:", err);
  } finally {
    mongoose.disconnect();
  }
}



initDB();
