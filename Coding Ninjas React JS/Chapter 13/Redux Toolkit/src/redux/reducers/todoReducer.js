
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState={
    todos:[
    ]
}

// create Async Thunk

export const getInitialState = createAsyncThunk('shafayath',async (arg,thunkApi)=>{

    // axios.get('http://localhost:4100/api/todos/').then((res)=>{
    //         // disptach(actions.setIntialState(res.data));
    //         thunkApi.dispatch(actions.setIntialState(res.data));
    //   })

    const response = await axios.get("http://localhost:4100/api/todos/");
    return response;
})

export const addTodoAsyncThunk = createAsyncThunk('shafayath1',async (payload)=>{
    const response = await fetch('http://localhost:4100/api/todos/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            text:payload,completed:false
        })
    });
    // console.log('hi');
    return response.json();
})

// reducer with redux toolkit

const todoSlice = createSlice({
    name:'todo',
    initialState: initialState,
    reducers:{
        add: (state,action)=>{
            state.todos.push({
                text: action.payload,
                completed:false
            })
        },
        toggle:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i==action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        },
        setIntialState :(state,action)=>{
            state.todos = [...action.payload];
                
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialState.fulfilled,(state,action)=>{
      console.log(action.payload.data);
            state.todos = [...action.payload.data];
        }).addCase(addTodoAsyncThunk.fulfilled,(state,action)=>{
                  state.todos.push(action.payload);
        })
    }
})


export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state)=>state.todoReducer.todos;


//reducer with redux
// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }