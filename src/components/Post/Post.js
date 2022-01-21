import React from 'react';

import './style.css'
import {Link} from "react-router-dom";
import {PostDetailsPage} from "../../pages";

const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <div>
                <h3>Post {id}: {title}</h3>
                <p>{body}</p>
            </div>
            <Link to={id.toString()} state={post}>
                <button>Post details</button>
            </Link>
        </div>

    );
};

export {Post};