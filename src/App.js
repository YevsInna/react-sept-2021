import React, {useReducer} from 'react';

import './App.css'

const reducer = (state, action) => {
    switch (action.type) {

        case 'inc1':
            return {...state, counter1: state.counter1 + 1}
        case 'dec1':
            return {...state, counter1: state.counter1 - 1}
        case 'reset1':
            return {...state, counter1: action.payload}

        case 'inc2':
            return {...state, counter2: state.counter2 + 2}
        case 'dec2':
            return {...state, counter2: state.counter2 - 2}
        case 'reset2':
            return {...state, counter2: action.payload}

        case 'inc3':
            return {...state, counter3: state.counter3 + 3}
        case 'dec3':
            return {...state, counter3: state.counter3 - 3}
        case 'reset3':
            return {...state, counter3: action.payload}

        default:
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});

    return (

        <div>

            <div className={'counter'}>
                <div>{state.counter1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'dec1'})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'reset1', payload: 0})}>RESET</button>
            </div>

            <div className={'counter'}>
                <div>{state.counter2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 0})}>RESET</button>
            </div>

            <div className={'counter'}>
                <div>{state.counter3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>INCREMENT</button>
                <button onClick={() => dispatch({type: 'dec3'})}>DECREMENT</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 0})}>RESET</button>
            </div>
        </div>
    );
};

export default App;