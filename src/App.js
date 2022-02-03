import React from 'react';

import './App.css'
import {Form} from "./components/Form";
import {Todos} from "./components/Todos";

const App = () => {
    return (
        <div>
            <Form/>
            <Todos/>
        </div>
    );
};

export default App;