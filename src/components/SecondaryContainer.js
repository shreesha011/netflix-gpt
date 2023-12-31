import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const  SecondaryContainer =() => {
  const movies=useSelector((store)=>store.movies);

  // If the movies are present then it returns the lists of movies
  return(
    movies.nowPlayingMovies &&(
    <div className="bg-black">
      <div className="-mt-52 relative pl-12 z-19">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>

      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      </div>


 
    </div>
    )
  )
  
}

export default SecondaryContainer;


     {/* 
      MovieList-Popular
        Moviecards*n
      MovieList-Nowplaying
      MovieList-Trending
      MovieList-Horror
      

       */}
