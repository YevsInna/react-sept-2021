import React from 'react';

const Post = ({post: {userId, id, title, body}}) => {

    return (
        <div>
            <h3>User {userId}, post {id}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default Post;