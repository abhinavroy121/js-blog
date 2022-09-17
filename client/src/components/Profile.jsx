import { Button, Input, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./module-css/Profile.module.css"
export const Profile = () => {

  const [userprofile,setuserprofile] = useState([])
  const [visible,setvisible] = useState(false)
  const [title,settitle] = useState("")
  const [description,setdescription] = useState('')
  const [url,seturl] = useState("")
  const [dmap,setdmap] = useState(true)
  const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
  const {username} = JSON.parse(localStorage.getItem("bloguser"))
  // console.log(username)
  let userid = localstoragedata;
  const changevisibility = () => {
    setvisible(!visible)
  }
  // fetch to get all the posts of the user
  const fetchprofile = () =>{
    axios.get(`http://localhost:8080/user/${userid}/posts`)
    .then((res)=>{
     setuserprofile(res.data.reverse())
     if(res.data.length > 0){
       setdmap(false)
     }
    
    })
    .catch((err) => {console.log(err,"eerrrrrrrr") 
     setdmap(true)
   })
  }
  useEffect(()=>{
   
     fetchprofile()
  },[])
  
const handlesubmit = () => {
   if(title.length > 0 && url.length > 0 && description.length > 0){
    const payload = {title,url,description,user_id:userid,username}

    axios.post(`http://localhost:8080/user/${userid}/post`,payload)
    .then((res)=>{
     alert("Post added successfully")
     fetchprofile()
 console.log(res.data)
    })
    .catch((err)=>{
     alert("Error in adding post")
     console.log(err)
    })
   }
   else {
     alert("Required all credentials")
   }
 
  //  console.log(payload)
  settitle("")
  setdescription("")
  seturl("")
  setvisible(!visible)

}
  
   
  

  return (
    <div>
      <div className={styles.addpost}>
        <h2 id={styles.addposthere} onClick={changevisibility}>Add Post here...</h2>
        <div className={visible? styles.postingdiv: styles.hidingdiv}>
          <Input className="inputname" type="text" value={url} onChange={(e)=>seturl(e.target.value)} placeholder="paste image url here" />
          <Input className="inputname" type="text" value={title} placeholder="Write here" onChange={(e)=> settitle(e.target.value)} />
          <TextField className="inputname" value={description} placeholder="Description" onChange={(e)=> setdescription(e.target.value)}/>
          <Button style={{backgroundColor: 'goldenrod'}} onClick={handlesubmit}>Add</Button>
        </div>
      </div>
      <div className={styles.blogview}>
        {dmap ?   <h1>No Post Found</h1> :userprofile.map((item)=>(
          <div key={item._id}>
        
            <img src={item.url} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        )) }
      </div>
    </div>
  )
}
