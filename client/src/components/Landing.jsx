import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import landing from "./images/landing.jpg"
import styles from "./modules-css/Landing.modules.css"
export const Landing = () => {
  const navigate = useNavigate()

  return (
    <div >
      <div style={{display: 'flex',justifyContent: 'center', gap:"20px",marginTop:"3rem"}}>
        <Button style={{border: '1px solid red'}} onClick={()=>navigate("/login")}>Login</Button>
        <Button  style={{border: '1px solid red'}}  onClick={()=>navigate("/signup")}>Signup</Button>
      </div>
      <h1  style={{border: '1px solid red',marginTop:"25px"}}>Welcome to Blogging</h1>
    </div>
  )
}
