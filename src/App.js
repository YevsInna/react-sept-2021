import React from 'react';
import {Route, Routes, Link} from "react-router-dom";

import './App.css'
import {Layout} from "./components";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage/EpisodeDetailsPage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'episode'} element={<EpisodesPage/>}>
                        <Route path={':id'} element={<EpisodeDetailsPage/>}/>
                    </Route>
                    <Route path={'character/:characterId'} element={<CharactersPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;