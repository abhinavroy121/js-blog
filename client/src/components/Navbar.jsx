import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getuser } from '../redux/action'
import styles from "./modules-css/Navbar.module.css"
export const Navbar = () => {

    const [page, setpage ] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pagevalue = useSelector(store=>store.pagevalue)
    // console.log(store)
    const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
    // console.log(pagevalue)
    useEffect(()=>{

    },)

    const handlelogout = () => {
       localStorage.removeItem("blogtoken")
       dispatch(getuser([""]))
       navigate("/login")
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
