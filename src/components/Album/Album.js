import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {id,userId, title} = album;

    return (
        <div>
            <h3>User {userId}, album {id}</h3>
            <p>Title: {title}</p>
            <Link to={`${id.toString()}/photos`}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export {Album};