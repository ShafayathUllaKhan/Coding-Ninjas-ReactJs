
// const redux = require("redux");

import * as redux from "redux";
import { combineReducers } from "redux";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";
import { loggerMIddleware } from "./middlewares/loggerMiddleware";

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);

export const store = configureStore({
    reducer:{
        todoReducer,noteReducer,notificationReducer
    },
    middleware:[
       ...getDefaultMiddleware(), loggerMIddleware
    ]
})