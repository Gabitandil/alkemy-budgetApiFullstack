import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/layout/navbar.scss'
import {useNavigate} from 'react-router'
function NavBar() {
  const navigate = useNavigate()
 const token = localStorage.getItem("token")
  function logOut(){
    localStorage.clear()
    setTimeout(() => {
      window.location.reload()
    }, 300);
  }
  useEffect(() => {
    
   !token? navigate("/") : console.log("logged in")
  }, [token])
  



  return (
    <div className='navContainer' >
      <h1>BUDGET API</h1>
      <li className='navOptions' >
        <span className={window.location.pathname === "/home" ? "selectedNavButton" : "navButton"}><Link style={{ textDecoration: "inherit", color: "inherit" }} to="/home"> Home </Link> </span>
        <span className={window.location.pathname === "/transactions" ? "selectedNavButton" : "navButton"} > <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/transactions"> Transactions </Link> </span>
       <span className='navButton'> <a onClick={() => logOut()} >logout</a> </span>
      </li>
    </div>
  )
}

export default NavBar
