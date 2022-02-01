import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data:newCar, id},{dispatch})=>{
        try {
           const data = await carService.create(newCar);
           dispatch(addCar({data}))
        }catch (e) {
            console.log(e)
        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id},{dispatch})=>{
        try {
           await carService.deleteById(id)
            dispatch(deleteCar({id}))
        }catch (e) {
            console.log(e)
        }
    }
);

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({data:car,id},{dispatch})=>{
        try {
            await carService.updateById(id)
            dispatch(updateCar({id}))
        }catch (e) {
            console.log(e)
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',

    initialState: {
        cars: [],
        status: null,
        error: null
    },

    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        // updateCar:(state,action)=>{
        //
        // }
    },

    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
});

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;
export default carReducer