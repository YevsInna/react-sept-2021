import React from 'react';
import {Link} from "react-router-dom";

const Episode = ({item}) => {
    const {id,name,episode,air_date} = item;

    return (
        <div className={'episode'}>
            <h3>{name}</h3>
            <p>Episode: {episode}</p>
            <p>Date: {air_date}</p>
            <Link to={id.toString()}>
                <button>Episode details</button>
            </Link>
        </div>
    );
};

export {Episode};
