const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes")
const userBlog = require("./routes/blogs.routes")
const cors = require("cors");
const connection = require("./db/db")


 app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended:true}))

app.use("/auth",authRouter)
app.use("/user",userBlog)

app.get("/",(req,res)=>{
     res.send("welcome to server")
})


app.listen(8080,async()=>{
    try{
        await connection;
        console.log("listening on http://localhost:8080")
    }
    catch(err){

    }
    
})