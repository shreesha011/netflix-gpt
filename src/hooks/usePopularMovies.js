import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies } from "../utils/movieSlice";
import {API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";




//useNowPlayingMovies is a custom hook and  is nothing but function
const usePopularMovies =() =>{
    //fetch Data from TMDB API and upadte Store using "use dispatch Hook"
  const dispatch=useDispatch();

  const popularMovies=useSelector(
   store =>store.movies.popularMovies
   );

  const getPopularMovies = async () =>{
     const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
     API_OPTIONS);

     //Convert the data into json
      const json=await data.json();
    

      //20 movie data need to Store in the Store
      dispatch(addPopularMovies(json.results));


  }

  // API need to call inside the Use effect & []-->Api should be called once when the component is rendered Once
 useEffect(() =>{
   if(!popularMovies) getPopularMovies();

 },[]);
};

export default usePopularMovies;