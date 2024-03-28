import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const Layout = () => {
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: true,
        });
    };
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <div className='bg-black'>
                <div className='pb-4 w-fit mx-auto'>
                    <button className='text-white flex items-center gap-1 dim Alliance uppercase' onClick={scrollToTop}><span><FaArrowUp /></span><span>Scroll To Top</span></button>
                </div>
            </div>
        </div>
    );
};

export default Layout;