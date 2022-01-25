import React from 'react';
import {Link} from "react-router-dom";
import EpisodesPage from "../../pages/EpisodesPage/EpisodesPage";

import '../styles.css'

const Header = () => {
    return (
        <div className={'header'}>
            <Link to={'/episode'}>Rick and Morty episodes</Link>
        </div>
    );
};

export {Header};