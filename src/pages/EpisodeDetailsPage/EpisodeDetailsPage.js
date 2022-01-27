import React, {useEffect, useState} from 'react';
import {Link, useParams, useLocation} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import {Character, Episode} from "../../components";
import {characterService} from "../../services/character.service";

const EpisodeDetailsPage = () => {
    const {state} = useLocation();
    const character = state.character;


    return (
        <div>
            {
                character.map(character=><Character key={character} character={character}/>)
            }
        </div>
    );
};

export default EpisodeDetailsPage;