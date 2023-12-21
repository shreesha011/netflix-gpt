import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore=configureStore (
    {
        // It will Store the All the Slices(Reducer)
        reducer:
        {
           user:userReducer,
        }
    }
)

export default appStore;