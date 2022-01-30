import React, {useReducer} from 'react';

import './App.css'
import FormCat from "./components/FormCat/FormCat";
import FormDog from "./components/FormDog/FormDog";

import Cat from "./components/Cat/Cat";
import Dog from "./components/Dog/Dog";


const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, action.payload]}

        case 'addDog':
            return {...state, dogs: [...state.dogs, action.payload]}

        case 'deleteCat':
            const newCatArray = state.cats.filter(cat => cat !== action.payload)
            return {...state, cats: newCatArray}

        case 'deleteDog':
            const newDogArray = state.dogs.filter(dog => dog !== action.payload)
            return {...state, dogs: newDogArray}
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const addCat = (data) => {
        dispatch({type: 'addCat', payload: data.cats})
    }
    const deleteCat = (cat) => {
        dispatch({type: 'deleteCat', payload: cat})
    }

    const addDog = (data) => {
        dispatch({type: 'addDog', payload: data.dogs})
    }

    const deleteDog = (dog) => {
        dispatch({type: 'deleteDog', payload: dog})
    }


    return (
        <div className={'forms'}>

            <div className={'pets'}>

                <div><FormCat addCat={addCat}/></div>

                <div>
                    {
                        state.cats.map(cat => <Cat key={cat.id} cat={cat} deleteCat={deleteCat}/>)
                    }
                </div>
            </div>

            <div className={'pets'}>
                <div><FormDog addDog={addDog}/></div>
                <div>
                    {
                        state.dogs.map(dog => <Dog key={dog.id} dog={dog} deleteDog={deleteDog}/>)
                    }
                </div>
            </div>

        </div>
    );
};

export default App;

