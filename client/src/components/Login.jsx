import { Button, Input } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { getuser, handlehomepage } from '../redux/action';

export const Login = () => {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userdetailhere = useSelector(store=> store.userdetail)
  // const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
  // console.log(userdetailhere)
  const handleSubmit = () => {
    let payload = {email,password}
      console.log(payload)
      axios.post(`http://localhost:8080/auth/login`,payload)
      .then((response) => {
          // console.log(response.data)
          dispatch(getuser(response.data))
         localStorage.setItem("blogtoken",JSON.stringify(response.data[0]._id))
         dispatch(handlehomepage(true))
         setTimeout(() =>{
            navigate("/")
         },2000)
      })
      .catch((error) => {
        console.log(error,"error while loginng")
        dispatch(handlehomepage(false))
      })
  }
  return (
    <div>
      <h1  style={{fontSize:"45px"}}>Login Here</h1>
     
        <br/>
        <div style={{width:"350px",margin:"auto",display: 'flex', flexDirection: 'column',justifyContent: 'center',gap:"30px"}}>
            <Input type="text" placeholder="email"  onChange={(e)=>setemail(e.target.value)}></Input>
            <Input  type="password" placeholder="password"  onChange={(e)=>setpassword(e.target.value)}></Input>
            <Button  variant="contained" onClick={handleSubmit}>click here</Button>
        </div>
    </div>
  )
}
