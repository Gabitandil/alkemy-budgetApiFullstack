import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/layout/navbar.scss'
function NavBar() {
  return (
    <div className='navContainer' >
      <h1>BUDGET API</h1>
      <li className='navOptions' >
        <span className={window.location.pathname === "/home" ? "selectedNavButton" : "navButton"}><Link style={{ textDecoration: "inherit", color: "inherit" }} to="/home"> Home </Link> </span>
        <span className={window.location.pathname === "/transactions" ? "selectedNavButton" : "navButton"} > <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/transactions"> Transactions </Link> </span>
      </li>
    </div>
  )
}

export default NavBar
