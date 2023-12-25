import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movies",
        //It will add all the Movie List so the initials State is empty
        initialState:{
            nowPlayingMovies:null,
            trailerVideo:null,
            popularMovies: null,
            trendingMovies:null,
            upcomingMovies:null,
        },
        reducers:
        {
            addNowPlayingMovies:(state,action) =>
            {
                //whatever the payload data is comming it must Store in "state.nowPlayingMovies"
                state.nowPlayingMovies=action.payload;
            },

            addPopularMovies:(state,action) =>
            {
                //whatever the payload data is comming it must Store in "state.nowPlayingMovies"
                state.popularMovies=action.payload;
            },

            addTrendingMovies:(state,action) =>
            {
                //whatever the payload data is comming it must Store in "state.nowPlayingMovies"
                state.trendingMovies=action.payload;
            },

            addUpcomingMovies:(state,action) =>
            {
                //whatever the payload data is comming it must Store in "state.nowPlayingMovies"
                state.upcomingMovies=action.payload;
            },

            addTrailerVideo:(state,action) =>{
                    state.trailerVideo=action.payload;
            },


        }
    }
)

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies,addUpcomingMovies}=movieSlice.actions;

export default movieSlice.reducer;