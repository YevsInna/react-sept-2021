import React from 'react';
import {Route, Routes, Link} from "react-router-dom";

import './App.css'
import {Header} from "./components/Header/Header";
import {Layout} from "./components";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage/EpisodeDetailsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'episode'} element={<EpisodesPage/>}>
                        <Route path={':id'} element={<EpisodeDetailsPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;