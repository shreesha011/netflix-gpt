import React from 'react';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';
import { BGC_IMAGE } from '../utils/constants';

function GptSearch() {
  return (
    <div>
      {/* GptSearch--->First Page
          Gpt Movie Suggestion--->Second Page */}

      <div className="absolute -z-10">
        <img src={BGC_IMAGE}
        alt="logo" />
      </div>


          <GptSearchBar/>
          <GptMovieSuggestions/>
      </div>
  )
}

export default GptSearch