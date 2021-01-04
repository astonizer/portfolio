import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="navbar_logo">ASTEL</div>
            <div className="menu_icon" onClick={handleClick}>
                {!click? <MenuIcon fontSize="large" /> : <CloseIcon fontSize="large" />}
            </div>
            <ul className={click? 'navbar_menu active' : 'navbar_menu'}>
                <li><Link className="navbar_link" to="/">Home</Link></li>
                <li><Link className="navbar_link" to="/about">About</Link></li>
                <li><Link className="navbar_link" to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
