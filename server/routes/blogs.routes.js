const {Router} = require("express")
const blog = require("../model/Blog");
const user = require("../model/User");
const userBlog = Router()


// userBlog.get("/:userid",async(req,res) => {
//      res.send("data")
// })

// when user posts a new blog
userBlog.post("/:userid/post",async(req,res)=>{
     try{
          const {title,url,user_id,username,description} = req.body;
          if(!title || !url || !user_id || !username){
            return res.status(404).send({message:"Post Unsuccessful"})
          }
          else{
            let post = await new blog(req.body)
            post.save((err,success) => {
               if(err){
                return res.status(500).send({message:"Server not working"})
               }
               return res.status(200).send(success)
            })
           
          }
     }
     catch(err){
            return res.status(500).send({message:"Server Down found"})
     }
})

// when user fetch all the posts made by the user
userBlog.get("/:userid/posts",async(req,res)=>{
    try{
      const {userid} = req.params;
      // console.log(userid)
       let posts = await blog.find({user_id:userid});
     return  res.status(200).send(posts)
    }
    catch(err) {
       return res.status(500).send({message:"No Posts Found"})
    }
})

// when user wants to delete a post posted by itself

 userBlog.delete("/:userid/:id",async (req,res)=>{
     try{
      let {id,user_id} = req.params;
      console.log(id)
        let userpost = await blog.findByIdAndDelete(id)
        console.log(userpost)
        if (userpost) {
          console.log(req.body)
      return  res.status(201).send("file deleted");
      }
      
     }
     catch(err) {
      console.log(err,"error in deleting post")
      res.send("ERROr from server")
     }
 })

// when user wants to see all the posts in the feed
userBlog.get("/posts",async(req,res)=>{
     try{
        let posts = await blog.find();
      return  res.status(200).send(posts)
     }
     catch(err) {
        return res.status(500).send({message:"No Posts Found"})
     }
 })
  
  // when user wants to like a post 
   
   userBlog.patch("/posts/:postId", async (req, res) => {
          try{
             console.log(req.params)
            let {postId} = req.params
           let likepost = await blog.findByIdAndUpdate(postId,req.body)
            console.log(likepost)
            return res.send(likepost)
            
          }
          catch(err) {
            return res.status(500).send({message:"No Posts Found to like"})
          }
   })


 // when user wants to see different user  profile page

  userBlog.get("/:username",async (req,res)=>{
      try{
        let {username} = req.params
        console.log(req.params)
          let postuser = await blog.find({username})
          // console.log(postuser)
          res.send(postuser)
      }
      catch(err) {
       console.log("err in finding different user profile page",err)
       res.status(500).send({message:"couldn't load other user page"})
      }
  })
 
module.exports = userBlog;