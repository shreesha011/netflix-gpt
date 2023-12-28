import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleGptSearchview: (state) =>{
           state.showGptSearch=!state.showGptSearch;
        },
    
        addGptmovieResult: (state,action) =>{
            const{movieNames,movieResults}=action.payload
            state.movieNames=movieNames;
            state.movieResults=movieResults;

        }
    }
})  


export const {toggleGptSearchview,addGptmovieResult}=gptSlice.actions;

export default gptSlice.reducer;