import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import {API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";




//useNowPlayingMovies is a custom hook and  is nothing but function
const useNowPlayingMovies =() =>{
    //fetch Data from TMDB API and upadte Store using "use dispatch Hook"
  const dispatch=useDispatch();

  const getNowPlaying = async () =>{
     const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
     API_OPTIONS);

     //Convert the data into json
      const json=await data.json();
    

      //20 movie data need to Store in the Store
      dispatch(addNowPlayingMovies(json.results));


  }

  // API need to call inside the Use effect & []-->Api should be called once when the component is rendered Once
 useEffect(() =>{
  getNowPlaying();

 },[]);
};

export default useNowPlayingMovies;