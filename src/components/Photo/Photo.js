import React from 'react';

import './style.css'

const Photo = ({photo}) => {
    const {albumId, id, title, url, thumbnailUrl} = photo;

    return (
        <div>
            <h3>Album {albumId}, photo {id}</h3>
            <p>{title}</p>
            <img src= {url} alt="photo"/>
            <img src= {thumbnailUrl} alt="photo"/>
        </div>
    );

};

export {Photo};