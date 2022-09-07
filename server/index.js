const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes")
const cors = require("cors");
const connection = require("./db/db")


 app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended:true}))

app.use("/user",authRouter)

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