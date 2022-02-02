import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

//створюємо слайс і підключаємо його в store.js
const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        //тут прописуються actions: що і як буде робитись, їх обз експортувати внизу файла
        addTodo: (state, action) => {
            //в масив тудушок додаємо обєкт з айді, неймом(дані з форми) і статусом(по дефолту як невиконане)
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false})
        }
    }
});

// із слайса витягуємо редьюсер:
const todoReducer = todoSlice.reducer;

export const {addTodo} = todoSlice.actions;
export default todoReducer;