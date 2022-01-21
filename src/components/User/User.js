import React from 'react';
import {Link} from "react-router-dom";

import {UserDetailsPage} from "../../pages";
import './style.css'

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <h3>{id} - {name}. Username - "{username}"</h3>
            <div className={'buttons'}>
                <Link to={id.toString()} state={user}>
                    <button className={'button'}>User details</button>
                </Link>
                <Link to={`${id.toString()}/albums`}>
                    <button className={'button'}>User albums</button>
                </Link>
            </div>
        </div>
    );
};

export {User};