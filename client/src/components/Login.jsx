import { Button, Input } from '@mui/material'
import React from 'react'

export const Login = () => {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <div style={{width:"50%",margin:"auto",display: 'flex', flexDirection: 'column',justifyContent: 'center',gap:"30px"}}>
            <Input type="text" placeholder="email"></Input>
            <Input  type="password" placeholder="password"></Input>
            <Button  variant="contained">click here</Button>
        </div>
    </div>
  )
}
