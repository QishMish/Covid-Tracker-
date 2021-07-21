import React from 'react'
import Logo from '../../assets/image/logo.png'
import './navbar.css'


export default function Navbar() {
    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' />
                    <span className='logo-text'>Be Aware!</span>
                </div>
                <ul className='nav-right'>
                    <li className='dashboard'>
                       Dashboard
                    </li>
                    <li className='update-time'>
                       Updated: 7/19/2021 at 5:07 PM
                    </li>
                </ul>
            </nav>            
        </div>
    )
}
