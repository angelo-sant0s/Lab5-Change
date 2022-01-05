import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({isOpen,toggle}) => {
    return (
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-black text-white navlinks" : "hidden"} onClick={toggle}>
            <Link className='p-4' to="/">Home</Link>
            <Link className='p-4' to="/About">About</Link>
            <Link className='p-4' to="/Login">Sign In</Link>
        </div>
    )
}

export default MobileMenu;
