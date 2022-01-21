import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import {Post} from "../../components/Post/Post";
import './style.css'

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, [])

    return (
        <div className={'posts'}>
            <div className={'posts-left'}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div className={'posts-right'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};