import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { logout } from '../../firebase-config'; 


const Navbar = ({toggle}) => {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    async function handleLogout() {
        try{   
            await logout();
        }catch(error){
            alert(error.message)
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className={color ? 'header nav-bg' : 'header'}>
            <nav className='sticky flex justify-between items-center h-16 mt-5 text-white shadow-sm font-mono'
                 role='navigation'>
                <Link to="/" className='pl-8 logo'>
                    Change
                </Link>
                <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </div>
                <div className='pr-8 md:block hidden navlinks'>
                    <Link className='p-5 ativo' to="/">Home</Link>
                    <Link className='p-5 ativo' to="/About">About</Link>
                    <Link className='p-5 ativo' to="/Login">Login</Link>
                    <Link className='p-5 ativo' to="/" onClick={handleLogout}>Logout</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
