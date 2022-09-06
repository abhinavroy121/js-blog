const express = require("express");
const app = express();

app.get("/",(req,res)=>{
     res.send("welcome to server")
})


app.listen(8080,()=>{
    console.log("listening on http://localhost:8080")
})