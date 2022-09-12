import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { getuser } from '../redux/action'
import { Home } from './Home'
import { Landing } from './Landing'
import styles from "./module-css/Navbar.module.css"
export const Navbar = () => {

    const [page, setpage ] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pagevalue = useSelector(store=>store.pagevalue)
    // console.log(store)
    let localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
    // console.log(pagevalue)
  

    const handlelogout = () => {
       localStorage.removeItem("blogtoken")
       dispatch(getuser(""))
       localstoragedata = null
       setTimeout(()=>{
        navigate("/login")
       },2000)
   
    }

  return (
    <div style={{backgroundColor:'lightblue'}}>
        <div className={styles.navbarcontent}>
           <Link to="/"> <button>Home</button></Link>
        {localstoragedata ? <Link to="/profile"> <button>Profile</button></Link> :
         <Link to="/login"> <button>Login</button></Link> 
        //  <Link to="/signup"> <button>Signup</button></Link>
        }
         {localstoragedata ? <button onClick={handlelogout}>Logout</button> :
  
         <Link to="/signup"> <button>Signup</button></Link>
        }
          
           
        </div>
    </div>
  )
}
