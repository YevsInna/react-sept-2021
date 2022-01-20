import React from 'react';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {Header} from "../Header/Header";


const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;