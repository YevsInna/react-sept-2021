import React from 'react';

const Comment = ({comment}) => {
    const {id, postId, name, body} = comment;
    return (
        <div>
            <h3>Post {postId}, comment {id}</h3>
            <p>Title: {name}</p>
            <p>{body}</p>
        </div>
    );
};

export {Comment};