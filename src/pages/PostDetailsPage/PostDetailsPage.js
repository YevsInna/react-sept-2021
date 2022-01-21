import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import './style.css'
import {PostCommentsPage} from "../PostCommentsPage/PostCommentsPage";

const PostDetailsPage = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [id])

    return (
        <div className={'post-details'}>
            <div>
                {
                    post && (
                        <div>
                            <h3>User {post.userId}, post {post.id}</h3>
                            <p>Title: {post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    )
                }
            </div>
            <Link to={'comments'}>
                <button>Post comments</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};