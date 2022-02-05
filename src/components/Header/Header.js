import React from 'react';
import {Outlet, NavLink} from 'react-router-dom'

import './style.css'

const Header = () => {
    return (
        <div>
            <div className={'menu'}>
                <NavLink to={'cars'}>CARS</NavLink>
                <NavLink to={'users'}>USERS</NavLink>
                <NavLink to={'posts'}>POSTS</NavLink>
                <NavLink to={'comments'}>COMMENTS</NavLink>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {Header};