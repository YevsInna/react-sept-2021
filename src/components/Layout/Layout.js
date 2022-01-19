import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

import './styles.css'

const Layout = () => {
    return (
        <div>
            <div className={'header'}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;