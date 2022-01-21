import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import {Album} from "../../components/Album/Album";
import './style.css'

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        userService.getAlbumsById(id).then(value => setAlbums(value))
    }, [id]);

    return (
        <div className={'albums'}>
            <div>
                {
                    albums.map(album => <Album key={album.id} album={album}/>)
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {AlbumsPage};