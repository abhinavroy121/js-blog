const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    name:String,
    username:String,
    password:String,
    email:String,
    age:Number,
    gender:String,
    city:String,
    profession:String,
})

const user = mongoose.model("blog",Schema)

module.exports = user;