import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";
import {Post} from "../../components/Post/Post";
import {userService} from "../../services/user.service";

const UserPostsPage = () => {
    const [posts,setPosts] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        userService.getPostsById(id).then(value => setPosts([...value]))
    },[id])

    return (
        <div>
            {
               posts.map(post=> <Post key={post.id} post={post}/>)
            }
            <Outlet/>
        </div>
    );
};

export {UserPostsPage};