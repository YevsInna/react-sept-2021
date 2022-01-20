import React from 'react';
import {Outlet} from "react-router-dom";

const AlbumsPage = () => {
    return (
        <div>
            Albums page
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};