import React from 'react';
import {Link} from "react-router-dom";

const Episode = ({episodeDetails}) => {
    const {id,name,episode,air_date} = episodeDetails;

    return (
        <div className={'episode'}>
            <h3>{name}</h3>
            <p>Episode: {episode}</p>
            <p>Date: {air_date}</p>
            <Link to={'/episodeDetails'} state={episodeDetails}>
                <button>Episode details</button>
            </Link>
        </div>
    );
};

export {Episode};
