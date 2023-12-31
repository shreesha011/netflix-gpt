import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => 
{
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

  // Called the Custom Hook "useNowPlayingMovies" inside the browser page
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
  return (
    <div>
        <Header/>

        {/* If the ShowGptSerch is true then it shows the GptSerach Page otherwise to mainconatiner or Secondary Conatiner(means false) */}
        {showGptSearch ? (
        <GptSearch/>
         ) : (
           <><MainContainer/>
          <SecondaryContainer/></>
         )
        }
      
        
      
      {/* 
        MainContainer--->means its videobackground and title
          -videoBackground
           -videoTitle
        

        SecondaryConatiner---->List of movies
         -MovieList
         -cards*n

      
      
      */}
    </div>
  
  );
}

export default Browse