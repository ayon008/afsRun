import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
    const { user } = useContext(AuthContext);
    const navItems = <>
        <li>
            <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"} to="discover">Discover</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"} to='userInformation/runsResults/addARun'>ADD A RUN</NavLink>
        </li>
        {
            user ?
                <>
                    <li>
                        <NavLink to="userInformation/runsResults" className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"}>ADD RUNS RESULT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/userInformation' className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"}><FaUser /> {user?.displayName}</NavLink>
                    </li>
                </>
                :
                <>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase pe-1 dim" : "text-[#FFFFFFCC] Alliance uppercase pe-1 dim"} to="login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "px-0 text-[#1D98FF] pointer-events-none Alliance uppercase dim" : "text-[#FFFFFFCC] Alliance px-0 uppercase dim pointer-events-none"} to="">/</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase ps-1" : "text-[#FFFFFFCC] Alliance uppercase ps-1"} to="signup">Sign Up</NavLink>
                    </li>
                </>
        }
    </>
    return (
        <div className='lg:px-10 2xl:px-40 fixed top-0 right-0 left-0 max-w-[1920px] mx-auto z-10 h-[62px]' style={{ background: 'linear-gradient(180deg, rgba(44, 51, 61, 0.9) 0%, rgba(37, 37, 37, 0.7) 100%)' }}>
            <div className="navbar p-0">
                <div className="flex-1 navbar-start">
                    <Link className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
                </div>
                {/* Large Display */}
                <div className="flex-none navbar-end">
                    <ul className="menu menu-horizontal px-1 font-bold hidden lg:flex">
                        {navItems}
                    </ul>
                    <div className="dropdown relative">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0" style={{ background: 'linear-gradient(180deg, rgba(44, 51, 61, 0.9) 0%, rgba(37, 37, 37, 0.7) 100%)' }}>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"} to="discover">Discover</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"} to='userInformation/runsResults/addARun'>ADD A RUN</NavLink>
                            </li>
                            {
                                user ?
                                    <>
                                        <li>
                                            <NavLink to="userInformation/runsResults" className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"}>ADD RUNS RESULT</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/userInformation' className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"}><FaUser /> {user?.displayName}</NavLink>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"} to="login">Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={({ isActive }) => isActive ? "text-[#1D98FF] Alliance uppercase" : "text-[#FFFFFFCC] Alliance uppercase"} to="signup">Sign Up</NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;