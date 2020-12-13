import React from 'react'
import '../../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo"></div>
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Contact Me</a>
        </nav>
    )
}

export default Navbar
