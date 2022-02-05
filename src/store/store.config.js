import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./car.slice";
import usersReducer from "./users.slice";

const store = configureStore({
    reducer: {
        carReducer,
        usersReducer
    }
});
export default store