import { Input, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from "./module-css/Profile.module.css"
export const Profile = () => {

  const [userprofile,setuserprofile] = useState([])
  const [visible,setvisible] = useState(false)

  const changevisibility = () => {
    setvisible(!visible)
  }
  useEffect(()=>{
     
  })
  

  return (
    <div>
      <div className={styles.addpost}>
        <h2 id={styles.addposthere} onClick={changevisibility}>Add Post here...</h2>
        <div className={visible? styles.postingdiv: styles.hidingdiv}>
          <Input type="file" />
          <Input type="text" placeholder="Write here"/>
          <TextField placeholder="Description"/>
        </div>
      </div>
      <div className={styles.blogview}>
        {userprofile.map((item)=>(
          <div>
            <p className={styles.username}>{item.username}</p>
            <img src={item.url} alt="" />
            <h2>{item.title}</h2>
            <p>description</p>
          </div>
        ))}
      </div>
    </div>
  )
}
