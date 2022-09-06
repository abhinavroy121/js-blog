import React from 'react'
import styled from 'styled-components'
import styles from "./Landing.module.css"
const Image = styled.div`
`;

export const Landing = () => {
  return (
    <div>
       <h1 className="text-3xl font-bold ">
      Welcome to Blog-log
    </h1>
    <div style={{display: 'flex', justifyContent: 'center',gap: '0.5em',marginTop: '10px'}}>
    <button class="bg-transparent hover:bg-blue-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Login
</button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Signup
</button>
    </div>
    
    </div>
  )
}
