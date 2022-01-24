import React, {useState} from 'react';

import './App.css'
import {Cars, Form} from "./components";

const App = () => {
    const [trigger,setTrigger] = useState(null);

    const update = data=>{
        setTrigger(data)
    }
    return (
        <div>
            <Form update={update}/>
            <Cars trigger={trigger}/>
        </div>
    );
};

export default App;