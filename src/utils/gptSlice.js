import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearchview: (state) =>{
           state.showGptSearch=!state.showGptSearch;
        }
    }
})  


export const {toggleGptSearchview}=gptSlice.actions;

export default gptSlice.reducer;