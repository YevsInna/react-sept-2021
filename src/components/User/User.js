import React from 'react';
import {Link} from "react-router-dom";
import {UserDetailsPage} from "../../pages";

const User = ({user}) => {
    const {id,name,username} = user;
    return (
        <div>
            <h3>{id} - {name}. Username - "{username}"</h3>
            <Link to={id.toString()} state={user} element={<UserDetailsPage/>}>
                <button>User details</button>
            </Link>
            <button>User albums</button>
        </div>
    );
};

export {User};