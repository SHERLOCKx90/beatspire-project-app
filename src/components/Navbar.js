import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="head">
            {/* <header className='navbar'> */}
                <div className='nav-div'>
                    <nav>
                        <ul>
                            <li><a href="#Hero">Home</a></li>
                            <li><a href="#About">About Us</a></li>
                            <li><a href="#Docs">Docs</a></li>
                        </ul>
                    </nav>
                </div>

            {/* </header> */}
        </div>

    )
}
