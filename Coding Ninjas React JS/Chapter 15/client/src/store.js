import { todoReducer } from "./redux/todoSlic";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer:{
        toReducerStore : todoReducer
    }
 })