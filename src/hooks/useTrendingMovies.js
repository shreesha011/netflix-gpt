import { useDispatch, useSelector } from "react-redux";
import {addTrendingMovies } from "../utils/movieSlice";
import {API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";




//useNowPlayingMovies is a custom hook and  is nothing but function
const useTrendingMovies =() =>{
    //fetch Data from TMDB API and upadte Store using "use dispatch Hook"
  const dispatch=useDispatch();

  const trendingMovies=useSelector(
   store =>store.movies.trendingMovies
   );

  const getTrendingMovies = async () =>{
     const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', 
     API_OPTIONS);

     //Convert the data into json
      const json=await data.json();
    

      //20 movie data need to Store in the Store
      dispatch(addTrendingMovies(json.results));


  }

  // API need to call inside the Use effect & []-->Api should be called once when the component is rendered Once
 useEffect(() =>{
   if(!trendingMovies) getTrendingMovies();

 },[]);
};

export default useTrendingMovies;