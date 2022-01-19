import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useNavigate} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglPostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [])

    const home = () => {
        navigate('/')
    }
    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={home}>Home</button>
            <button onClick={back}>Back</button>
            {
                post && (
                    <div>
                        <div>{id})Post title:{post.title}</div>
                        <div>User - {post.userId}</div>
                        <div>{post.body}</div>
                    </div>

                )
            }
        </div>
    );
};

export default SinglPostPage;