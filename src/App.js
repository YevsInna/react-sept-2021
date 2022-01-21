import React from 'react';
import {Routes, Route, Link, Navigate} from "react-router-dom";

import './App.css'
import Layout from "./components/Layout/Layout";
import {
    AlbumsPage, PhotosPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./pages";


const App = () => {

    return (
        <div>

            <Routes>

                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>

                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':id/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>

            </Routes>
        </div>
    );
};

export default App;