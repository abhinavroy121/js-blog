import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from "./modules-css/Navbar.module.css"
export const Navbar = () => {

    const [page, setpage ] = useState(false)
    const dispatch = useDispatch()
    const pagevalue = useSelector(store=>store.pagevalue)
    // console.log(store)
     
    console.log(pagevalue)
    useEffect(()=>{

    },)
  return (
    <div style={{backgroundColor:'lightblue'}}>
        <div className={styles.navbarcontent}>
           <Link to="/"> <button>Home</button></Link>
        {pagevalue ? <Link to="/profile"> <button>Profile</button></Link> :
         <Link to="/login"> <button>Login</button></Link> 
        //  <Link to="/signup"> <button>Signup</button></Link>
        }
         {pagevalue ? <button>Logout</button> :
  
         <Link to="/signup"> <button>Signup</button></Link>
        }
          
           
        </div>
    </div>
  )
}
