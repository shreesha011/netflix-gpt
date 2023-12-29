import React from 'react';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';
import { BGC_IMAGE } from '../utils/constants';

const GptSearch =() =>{
  return (
    <>
       <div className="fixed -z-10">
          <img src={BGC_IMAGE} alt="logo" />
       </div>

       <div>
         <GptSearchBar />
         <GptMovieSuggestions />
       </div>
  </>
  )
}

export default GptSearch