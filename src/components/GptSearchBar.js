import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptmovieResult } from '../utils/gptSlice';

function GptSearchBar() {
  const dispatch=useDispatch();
  const langKey=useSelector((store)=>store.config.lang);
  const searchText=useRef(null);

  // search movie in TMDB API 
  const serachMovieTMDB=async(movie) =>{
    const data=await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
       "&include_adult=false&language=en-US&page=1", 
       API_OPTIONS)

    const json= await data.json();
    return json.results;
    };

  const handleGptSearchClick =async() =>{
    //It collects the data from input box and prints in the console
     console.log(searchText.current.value);

    const gptQuery="Act as a Movie Recommendation system and suggest some movies for the Query :" +
     searchText.current.value + 
     "only give me names of 5 movies,comma seperated like the example result given ahead.Example Result:Gadar,Sholay,Don,Golmal,Koi Mil Gaya";

      // based on the content it shows the movies results "with the help of searchText.current.value"
      
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if (!gptResults.choices) {
        // TODO: Write Error Handling
      }

    //console.log(gptResults.choices);    

    //console.log(gptResults.choices?.[0]?.message?.content);

    //Convert from Strings to Arrays for movies-->Andaz Apna Apna,Hera Pheri,Chupke Chupke,Khoobsurat,Chalti Ka Naam Gaadi
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");

     // [Andaz Apna Apna,Hera Pheri,Chupke Chupke,Khoobsurat,Chalti Ka Naam Gaadi]

      //For each movie I will Search TMDB API
      // For each movie in the array, perform a search using the TMDB API
      // The map() function iterates over each element in the array and applies a function (searchMovieTMDB) to it
      const promiseArray=gptMovies.map((movie) =>serachMovieTMDB(movie)); 
      // [Promise,Promise,Promise,promise,Promise]----->It will returns each prmoises for each movie

      //It will await for all the 5 promises need to be resolved  (It will resolve all the Promises and get the results)
      const tmdbResults=await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(addGptmovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
  }



  return (
    <div className="pt-[5%] flex justify-center">
       <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) =>e.preventDefault()}>
          <input 
          ref={searchText}
          type="text"    
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          />

          <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}>
            {lang[langKey].search}
            </button>
       </form>
    </div>
  )
}

export default GptSearchBar