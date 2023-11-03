import { createStore, combineReducers } from "redux"; 

import todoReducer from "./reducers/todo-reducer";

const rootReducer =  combineReducers(
    {
        todos: todoReducer,          //object key-value pair
    }
    )  //combine all reducers inside rootReducer

const store = createStore(rootReducer)

export default store;

