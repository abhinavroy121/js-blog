import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const UserPage = () => {

    const [duser,setduser] = useState([])
    const differentone = localStorage.getItem("differentone") || undefined;
    const fetchother = () =>{
        axios.get(`http://localhost:8080/user/${differentone}`)
        .then((res)=>{
            setduser(res.data)
            console.log(res.data)
        })
    }

     useEffect(() => {
      fetchother()
     },[])

//    console.log(duser)
  return (
    <div>
     {
        duser.map((item)=>(
            <div key={item._id}>
        
            <img src={item.url} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
     }
    
        
    </div>
  )
}

export default UserPage