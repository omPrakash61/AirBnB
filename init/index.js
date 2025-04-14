const { sampleListings } = require("./data.js");
const { listing } = require("../model/allUsers.js");

module.exports = async function initDB() {
  try {

    await listing.deleteMany({});
    console.log("Old data deleted!");

    await listing.insertMany(sampleListings);
    console.log("All data inserted successfully!");
  } catch (err) {
    console.log("Error during DB operation:", err);
  }
}
