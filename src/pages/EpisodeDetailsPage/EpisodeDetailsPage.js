import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {episodeService} from "../../services/episode.service";
import {Character, Episode} from "../../components";
import {characterService} from "../../services/character.service";

const EpisodeDetailsPage = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        characterService.getCharacterById(id).then(value => setDetails({...value}))
    }, [id]);

    return (
        <div>
            {
                details && (
                    <div>
                        <div>Name - {details.name}, gender - {details.gender}</div>
                        <div>Status - {details.status}, species-  {details.species}</div>

                    </div>
                )
            }
        </div>
    );
};

export default EpisodeDetailsPage;