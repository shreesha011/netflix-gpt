import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"

const appStore=configureStore (
    {
        // It will Store the All the Slices(Reducer)
        reducer:
        {
           user:userReducer,
           movies:moviesReducer,

        }
    }
)

export default appStore;