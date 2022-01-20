import React from 'react';
import {Outlet} from "react-router-dom";

const UserPostsPage = () => {
    return (
        <div>
            User Posts Page
            <Outlet/>
        </div>
    );
};

export {UserPostsPage};