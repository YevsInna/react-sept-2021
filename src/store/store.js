import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todo.slice";


const store = configureStore({
    // сюди (в reducer) підключаємо слайси
    reducer: {
        todo: todoReducer
    }
});

export default store;
// цей стор через провайдер підключаємо в Апп