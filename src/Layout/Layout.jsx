import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import ScrollButton from '../Components/ScrollButton';

const Layout = () => {

    const location = useLocation();
    console.log(location?.pathname);


    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;