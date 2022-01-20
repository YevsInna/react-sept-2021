import React from 'react';
import {NavLink} from "react-router-dom";

import './style.css'

const Header = () => {
    return (
        <div>
            <div className={'header'}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
        </div>
    );
};

export {Header};