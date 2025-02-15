const ListingData = require("./data.js");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/AirBnB";
const Listing = require("../model/listing.js");

initDB().then(()=>{
    console.log("DB connected succesfull!");
}).catch((err)=>{
    console.log("Something went wrong : ",err)
})

async function initDB(){
    await mongoose.connect(MONGO_URL);
}

const fillData = async ()=>{
    await Listing.insertMany(ListingData.data);
}

fillData().then(()=>{
    console.log("all Data inserted succesfull!");
}).catch((err)=>{
    console.log("Error Occur During insertion of data!",err);
});