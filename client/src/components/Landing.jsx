import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import landing from "./images/landing.jpg"
import styles from "./module-css/Landing.module.css"
export const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.imagediv}>

      <h1  style={{border: '1px solid red'}}>Welcome to Blogging</h1>
    </div>
  )
}
