import React from 'react';

const Post = (props) => {
    const {id, userId, title, body} = props;

    return (
        <div>
            <p>{id}. User - {userId}</p>
            <p>Title of post: {title}</p>
            <p>{body}</p>
        </div>
    );
};

export default Post;