import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const  MainContainer =() =>
 {
   // Using useSelector it will fetch the movies from Store(like movies)
    const movies=useSelector(Store=>Store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[2];
    
    
    // Decalared using const like title and overview
    const { original_title, overview,id} = mainMovie;

    
      return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        
        </div>
        
      )
  
}
export default MainContainer;



