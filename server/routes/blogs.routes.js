const {Router} = require("express")
const userBlog = Router()

userBlog.get("/",async(req,res) => {
     res.send("data")
})