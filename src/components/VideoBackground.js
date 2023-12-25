import {useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground  = ({movieId}) => {

  //Need the fetch the video key from Store
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

  //Fetched the Custom Hook from "useMovieTrailer.js"
  useMovieTrailer(movieId);

  return(
    <div className='w-screen'>
      <iframe 
      className="w-screen aspect-video"
      //Based on the key the trailer will Reflect in the UI
      src={"https://www.youtube.com/embed/" +
      trailerVideo?.key + 
      "?&autoplay=1&mute=1"
       }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
      </div>
  )
  
}

export default VideoBackground ;

