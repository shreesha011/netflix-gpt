import { useDispatch, useSelector } from "react-redux";
import {addUpcomingMovies } from "../utils/movieSlice";
import {API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";




//useNowPlayingMovies is a custom hook and  is nothing but function
const useUpcomingMovies =() =>{
    //fetch Data from TMDB API and upadte Store using "use dispatch Hook"
  const dispatch=useDispatch();

  
  const upcomingMovies=useSelector(
   store =>store.movies.upcomingMovies
   );

  const getUpcomingMovies = async () =>{
     const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', 
     API_OPTIONS);

     //Convert the data into json
      const json=await data.json();
    

      //20 movie data need to Store in the Store
      dispatch(addUpcomingMovies(json.results));


  }

  // API need to call inside the Use effect & []-->Api should be called once when the component is rendered Once
 useEffect(() =>{
   if(!upcomingMovies) getUpcomingMovies();

 },[]);
};

export default useUpcomingMovies;