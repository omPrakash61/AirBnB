const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    image : {
        filename : String,
        url : {
            type : String,
            default : "https://images.unsplash.com/photo-1739286955038-a4e5ce4f9462?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
    price : Number,
    location : String,
    country : String
})

const userSchema = mongoose.Schema({
    email : {
        type : String,
        require : true
    },
    name : String,
    password : {
        type : String,
        required : true
    },
    country : String,
    contact : Number,
    gender : String
})

const user = mongoose.model("user",userSchema);
const Listing = mongoose.model("Listing",listingSchema);
module.exports = {Listing,user};