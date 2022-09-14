const mongoose = require("mongoose");

const Schema = mongoose.Schema({
     title:String,
     url:String,
     user_id:String,
     username:String,
     description:String,
})

const blog = mongoose.model("soloblog",Schema)

module.exports = blog;