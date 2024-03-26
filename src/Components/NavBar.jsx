import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const NavBar = () => {
    const navItems = <>
        <li>
            <Link className='Alliance uppercase'>Discover</Link>
        </li>
        <li>
            <Link className='Alliance uppercase'>ADD A RUN</Link>
        </li>
        <li>
            <Link className='Alliance uppercase pe-2 dim'>Login</Link>
        </li>
        <li><Link className='Alliance uppercase px-0'>/</Link></li>
        <li>
            <Link className='Alliance uppercase ps-2'>Sign Up</Link>
        </li>
    </>
    return (
        <div className='lg:px-10 2xl:px-40 fixed top-0 right-0 left-0 max-w-[1920px] mx-auto z-10 h-[62px]' style={{ background: 'linear-gradient(180deg, rgba(44, 51, 61, 0.9) 0%, rgba(37, 37, 37, 0.7) 100%)' }}>
            <div className="navbar p-0">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
                </div>
                {/* Large Display */}
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold text-[#FFFFFFCC]">
                        {navItems}
                        {/* NavLinks according to users */}
                        {/* {
                            !user ? <><li><Link to="/signin" className='Alliance'>SIGN IN</Link></li>
                                <li><Link to='/signup' className='Alliance'> SIGN UP</Link></li></>
                                : <><li><Link to="/addresult" className='Alliance'>ADD RUNS RESULT</Link></li>
                                    <li><Link to='/userInformation' className='Alliance'><FaUser /> {user?.displayName}</Link></li></>
                        } */}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default NavBar;