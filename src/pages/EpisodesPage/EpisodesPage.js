import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Episode} from "../../components/Episode/Episode";
import {episodeService} from "../../services/episode.service";
import '../styles.css'

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
       episodeService.getAll().then(value => setEpisodes([...value.results]))
    }, [])

    return (
        <div>

            <div className={'episodes'}>
                {
                    episodes.map(item => <Episode key={item.id} item={item}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default EpisodesPage;