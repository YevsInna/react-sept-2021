import React from 'react';

import './App.css'
import {Form} from "./components/Form";
import {Todos} from "./components/Todos";
import {Counter} from "./components/Counter";

const App = () => {
    return (
        <div className={'wrap'}>
            <Counter/>
            <Form/>
            <Todos/>
        </div>
    );
};

export default App;