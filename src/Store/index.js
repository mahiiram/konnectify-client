import {configureStore, createSlice} from '@reduxjs/toolkit';

const userslice = createSlice({
    name:"user",
    initialState: { isLoggedIn: false},
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            localStorage.removeItem('token')
            localStorage.removeItem('emailorname')
            state.isLoggedIn = false;
        }
    }
})

export const userAction =userslice.actions;

export const store  = configureStore({
    reducer:{
        user: userslice.reducer,
    }
})