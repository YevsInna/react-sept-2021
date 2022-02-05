import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../services/user.service";


export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {dispatch}) => {
        try {
            const users = await userService.getAll();
            dispatch(getUsers(users))
        } catch (e) {
            console.log(e)
        }

    }
);

const initialState = {
    users: []
}
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = [...action.payload]
        }
    }
});

const usersReducer = usersSlice.reducer;

export const {getUsers} = usersSlice.actions;
export default usersReducer;