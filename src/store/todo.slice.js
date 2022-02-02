import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

//створюємо слайс і підключаємо його в store.js
const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        //тут прописуються actions: що і як буде робитись
        addTodo:(state,action)=>{

        }
    }
});

// із слайса витягуємо редьюсер:
const todoReducer = todoSlice.reducer;
export default todoReducer;