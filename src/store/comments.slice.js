import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../services/comment.service";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {dispatch}) => {
        try {
            const comments = await commentsService.getAll();
            dispatch(getComments(comments))
        } catch (e) {
            console.log(e)
        }

    }
);

const initialState = {
    comments:[]
}

const commentsSlice = createSlice({
    name:'commentsSlice',
    initialState,
    reducers:{
        getComments:(state, action) => {
            state.comments = [...action.payload]
        }
    }
});

const commentsReducer = commentsSlice.reducer;

export const {getComments} = commentsSlice.actions
export default commentsReducer;