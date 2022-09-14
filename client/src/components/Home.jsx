import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localstoragedata){
      navigate("/login")
    }
  },[])
  const userdetailhere = useSelector(store=> store.userdetail)
  console.log(userdetailhere);
  const [blog,setblog] = useState([])


   useEffect(()=>{
    const fetchblog = ()=>{
      axios.get("http://localhost:8080/user/posts")
      .then((res)=>{
        //  console.log(res.data)
         setblog(res.data)
      })
      .catch((err)=>{
        console.log(err);
        alert("DATA NOT FOUND")
      })
    }
    fetchblog()
   },[])

  return (
    <div>
      <div>
        {blog.map((item)=>(
          <div>
            <p>{item.username}</p>
            <h1>{item.title}</h1>
            <img src={item.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
