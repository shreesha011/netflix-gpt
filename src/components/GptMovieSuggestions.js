import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';


const GptMovieSuggestions =() =>{
  const {movieResults,movieNames}=useSelector(store=>store.gpt);

  if(!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {/* <Movielist/>  is a resuable code */}
       {movieNames.map((movieName,index)=> <MovieList 
       key={movieName}
       title={movieName} 
       movies={movieResults[index]}
       />
       )}
      </div>
      {movieNames}
      
    </div>
  )
}

export default GptMovieSuggestions