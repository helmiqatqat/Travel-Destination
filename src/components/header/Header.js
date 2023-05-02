import React from "react";
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <header>
      <h1>Tours</h1>
      <Link to="/">Home</Link>
    </header>
  )
}

export default Header