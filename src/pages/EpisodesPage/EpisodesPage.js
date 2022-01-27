import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Episode} from "../../components/Episode/Episode";
import {episodeService} from "../../services/episode.service";
import '../styles.css'

const EpisodesPage = () => {
    const [numberPage, setNumberPage] = useState();

    const [page, setPage] = useState(1);

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodeService.getEpisodeByPage(page).then(value => {
            setEpisodes([...value.results]);
            setNumberPage(value.info.pages)
        });
    }, [page]);

    const nextPage = () => {
        if (page < numberPage) {
            setPage(page + 1)
        }
    };

    const previousPage = () => {
        setPage(page - 1)
    };

    return (
        <div>
            <h1>Rick and Morty episodes</h1>
            <div>
                {
                    episodes.map(episode => <Episode key={episode.id} episodeDetails={episode}/>)
                }
            </div>
            <div>
                <button onClick={previousPage}>Previous page</button>
                <button onClick={nextPage}>Next page</button>
            </div>
            <Outlet/>
        </div>
    );
};

export default EpisodesPage;