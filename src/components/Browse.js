import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => 
{
  // Called the Custom Hook "useNowPlayingMovies" inside the browser page
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  
  return (
    <div>
        <Header/>
        <MainContainer/>
      <SecondaryContainer/>
      
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