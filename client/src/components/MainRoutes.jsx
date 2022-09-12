import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Landing } from './Landing'
import { Login } from './Login'
import { Profile } from './Profile'
import { Signup } from './Signup'

export const MainRoutes = () => {
    const [page, setpage ] = useState(false)
    const dispatch = useDispatch()
    const pagevalue = useSelector(store=> store.pagevalue)
      const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
    useEffect(()=>{

    },)
  return (
    <div>
        <Routes>
            <Route path="/" element={localstoragedata?<Home/>:<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  )
}
