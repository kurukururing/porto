// assets/components/navbar.jsx
import React from 'react';

function Navbar(){
    return(
        <nav className="navbarWrapper">
            <ul className="navList">
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#project"><li>Project</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar;