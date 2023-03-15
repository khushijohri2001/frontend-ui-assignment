import React from 'react'
import "../styles/navbar.css"
import { FaBell, FaUser } from 'react-icons/fa';
import LogoutIcon from "../asset/logout.svg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className='nav-container flex-row flex-space-between flex-align-items-center'>
        <h1><i>Helpdesk</i></h1>
        <div className='flex-row flex-align-items-center gap-medium'>
            <FaBell size={25} />
           <Link to="/user-profile" className="text-decor-none"> <FaUser size={25} /> </Link>
           <Link to="/signin" className="text-decor-none"><img src={LogoutIcon} alt="Logout Icon" /></Link>
        </div>
        </div>
    </nav>
  )
}

export {Navbar};