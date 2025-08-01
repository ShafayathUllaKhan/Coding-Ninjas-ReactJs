import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducer";

const initialState = {
    message:""
}

const notificationSlice = createSlice({
    name:'notification',
    initialState: initialState,
    reducers:{
        reset : (state,action)=>{
            state.message = ""
        }
    },
    // extraReducers:{
    //     "todo/add":(state,action)=>{
    //         state.message = "Todo is created"
    //     }
    // }
    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add,(state,action)=>{
    //             state.message = "Todo is created";
    //     })
    // }
    extraReducers:{
        [actions.add] : (state,action)=>{
            state.message = "Todo is created";
        }
    }
})

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;

export const notificationSelector = (state)=>{

    return state.notificationReducer.message;
}