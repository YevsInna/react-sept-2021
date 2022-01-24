import React, {useState} from 'react';

import './App.css'
import {Cars, Form} from "./components";

const App = () => {
    const [trigger,setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState({});


    return (
        <div>
            <Form update={setTrigger} carForUpdate={carForUpdate}/>
            <Cars trigger={trigger} update={setTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default App;