import React, { useState } from 'react'
import '../../styles/Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="navbar_logo">LOGO</div>
            <div className="menu_icon" onClick={handleClick}>
                {!click? <MenuIcon fontSize="large" /> : <CloseIcon fontSize="large" />}
            </div>
            <ul className={click? 'navbar_menu active' : 'navbar_menu'}>
                <li><a className="navbar_link" href="#">Home</a></li>
                <li><a className="navbar_link" href="#">About</a></li>
                <li><a className="navbar_link" href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
