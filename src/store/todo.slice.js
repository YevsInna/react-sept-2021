import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    // all: 0,
    completed: 0
}

//створюємо слайс і підключаємо його в store.js
const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        //тут прописуються actions: що і як буде робитись, їх експортувати внизу файла
        addTodo: (state, action) => {
            //в масив тудушок додаємо обєкт з айді, неймом(дані з форми) і статусом(по дефолту як невиконане)
            state.todos.push({id: new Date().getTime(), name: action.payload.todo, status: false})
        },
        changeStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            todo.status = !todo.status;
            if(todo.status){
                state.completed = state.completed + 1
            }else{
                state.completed = state.completed - 1
            }
        },
        deleteTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos.splice(index, 1);
            state.all = state.all - 1;

            if(action.payload.status === true){
                state.completed = state.completed - 1
            }
        },
        // allInc:(state,action)=> {
        //     state.all = state.all+1;
        // }
    }
});

// із слайса витягуємо редьюсер:
const todoReducer = todoSlice.reducer;

export const {addTodo, changeStatus, deleteTodo,allInc} = todoSlice.actions;
export default todoReducer;