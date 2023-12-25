import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movies",
        //It will add all the Movie List so the initials State is empty
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null,
        },
        reducers:
        {
            addNowPlayingMovies:(state,action) =>{
                //whatever the payload data is comming it must Store in "state.nowPlayingMovies"
                state.nowPlayingMovies=action.payload;
            },

            addTrailerVideo:(state,action) =>{
                    state.trailerVideo=action.payload;
            },


        }
    }
)

export const {addNowPlayingMovies,addTrailerVideo}=movieSlice.actions;

export default movieSlice.reducer;