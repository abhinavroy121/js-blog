import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from "./module-css/Home.module.css"
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
         console.log(res.data)
         setblog(res.data.reverse())
      })
      .catch((err)=>{
        console.log(err);
        alert("DATA NOT FOUND")
      })
    }
    fetchblog()
   },[])

  return (
   
      <div className={styles.blogview}>
        {blog.map((item)=>(
          <div key={item._id}>
            <p className={styles.username}>{item.username}</p>
            <img src={item.url} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
   
  )
}
