import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SinglePost = () => {
    const navigate = useNavigate()
    const singledata = useSelector((store)=> store.singledata[0]) || undefined
    useEffect(()=>{
         if( !singledata ||undefined){
           navigate("/")
         }
    },[])
    
    
    const handledelete = () =>{
        console.log(singledata.userid,singledata._id)
         axios.delete(`http://localhost:8080/user/${singledata.user_id}/${singledata._id}`)
         .then((res)=> {
            console.log(res)
            navigate("/profile")
         })
         .catch((err)=> console.log(err))
    }  
    const handleedit = () =>{

    }
    console.log(singledata)
  return (
    <div>
         <img src={singledata.url} alt="" />
            <h2>{singledata.title}</h2>
            <p>{singledata.description}</p>
            <Button>Edit</Button>
            <Button onClick={()=>handledelete()}>Delete</Button>
    </div>
  )
}

export default SinglePost