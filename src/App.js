import React, {useReducer} from 'react';

import './App.css'
import FormCat from "./components/FormCat/FormCat";import FormDog from "./components/FormDog/FormDog";

import Cat from "./components/Cat/Cat";


const reducer = (state, action) => {
switch (action.type){
    case 'addCat':
        return {...state, cats:[...state.cats]}
}
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [],dogs: []});

    const addCat = (data) => {
        dispatch({type: 'addCat', payload: data.cats})
    }
    const deleteCat = (id)=>{

    }

    return (
        <div className={'forms'}>
            <FormCat addCat={addCat}/>

            <div>
                {
                state.cats.map(cat => <Cat key={cat.id} cat={cat} deleteCat={deleteCat}/>)
            }
            </div>
            <FormDog/>
        </div>
    );
};

export default App;

