import React from 'react';
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            Posts page
            <Outlet/>
        </div>
    );
};

export {PostsPage};