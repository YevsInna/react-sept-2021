import React from 'react';
import {Outlet} from "react-router-dom";

const PostDetailsPage = () => {
    return (
        <div>
            Post Details page
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};