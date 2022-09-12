import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localstoragedata){
      navigate("/login")
    }
  },[])
  return (
    <div>Home</div>
  )
}
