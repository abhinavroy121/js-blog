const {Router} = require("express");

 const userModel = require("../model/User")
const authRouter = Router()

authRouter.get("/",async(req,res)=>{
    // console.log(req)
//    const data = await userModel.find()
    //  res.json(data)
    res.send("user authRouter")
})

authRouter.post("/register",async(req,res)=>{
    try{
        const {name,username,password,email,age,gender,city,profession} = req.body
        console.log(req.body)
     
           if(!name || !username || !password || !email || !age  || !gender  || !city  || !profession  ){
               return res.status(501).send("Enter valid user details")
            }
            else{
               
               const user = new userModel(req.body)
               user.save((err,success)=>{
                 if(err) {
                     return res.status(404).send(err.message)
                 }
                  return res.status(201).send(success)
               })
            }
        }
            catch(err) {
                return res.status(501).send("server down")
            }
    })

    authRouter.post("/login",async(req,res) => {
         const {username,password,email} = req.body;
         if(!username || !password || !email) {
              return res.status(403).send("Enter valid username or password")
         } 
         else{
            let userdetails = {username,password,email};
            let useravailable = await userModel.find(userdetails)
            res.status(200).send({useravailable})
         }
    })

module.exports = authRouter;