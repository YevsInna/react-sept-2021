import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import {Photo} from "../../components/Photo/Photo";

const PhotosPage = () => {
    const [photos,setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(()=>{
        userService.getPhotosById(albumId).then(value => setPhotos(value))
    },[albumId]);

    return (
        <div>
            {
                photos.map(photo=><Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export {PhotosPage};