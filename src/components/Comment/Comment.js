import React from 'react';

const Comment = (props) => {
    const {postId, id, name, email, body} = props;

    return (
        <div>
            <p>Post {postId}, user {id}</p>
            <p>Email: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;

