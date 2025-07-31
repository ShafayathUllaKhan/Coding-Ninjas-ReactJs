

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    todos:[

    ]
};

export const addApi = createAsyncThunk("shafayath",async (payload,thunkApi)=>{
    const response = await fetch("http://localhost:4200/",{
        method : "POST",
        headers: {
            "Content-Type": "application/json", // this is REQUIRED to send JSON
        },
        body : JSON.stringify({text : payload,completed : false})
    });
    return response.json();
})


export const getApi = createAsyncThunk("shafayath1",async (payload,thunkApi)=>{
    const response = await fetch("http://localhost:4200/");
    return response.json();
})

export const deleteApi = createAsyncThunk("shafayath2",async (payload,thunkApi)=>{
    const response = await fetch(`http://localhost:4200/delete/${payload}`,{
        method:"DELETE",
    });
    return response.json();
})

export const updateApi = createAsyncThunk("shafayath3",async (payload,thunkApi)=>{
    const response = await fetch(`http://localhost:4200/${payload.id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json", // this is REQUIRED to send JSON
        },
        body : JSON.stringify(payload.updates)
    });
    return response.json();
})





const todoSlicer = createSlice({
    name:"todo",
    initialState : initialState,
    reducer :{

    },
    extraReducers :(builder)=>{
        builder.addCase(addApi.fulfilled,(state,action)=>{
            state.todos.push(action.payload);
        }).addCase(getApi.fulfilled,(state,action)=>{
            state.todos = action.payload
        }).addCase(deleteApi.fulfilled,(state,action)=>{
            const index = state.todos.findIndex((ele)=>{
                return ele._id === action.payload
            })
            state.todos.splice(index,1);
        }).addCase(updateApi.fulfilled,(state,action)=>{
            const index = state.todos.findIndex((ele)=>{
                return ele._id === action.payload._id
            })
            console.log('hi');
            state.todos[index] = action.payload
        })
    }
});

export const todoReducer = todoSlicer.reducer;