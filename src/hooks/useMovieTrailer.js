import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer =(movieId) =>{

    const dispatch=useDispatch();

    //Fetch trailer video with the Help of TMDB API and update the Store with Trailer video data
    const getMovieVideos =async()  =>{
      const data=await fetch("https://api.themoviedb.org/3/movie/" +
       movieId +
      "/videos?language=en-US",API_OPTIONS);
      

      //Convert data into json  && It will Show all the movie Related to This ID#1029575
      const json=await data.json();
      console.log(json);

      // It will Show only Trailer data inside the Json (If 2 trailer are present then it will Show the first trailer)
      const filterData=json.results.filter(video=>video.type==="Trailer")

      // Used conditional Opertors (If the trailer is present then filterData[0] otherwise json.results[0] means trailer is not prsent)
      const trailer=filterData.length ? filterData[0] :json.results[0];
      dispatch(addTrailerVideo(trailer));
  }


  useEffect(() =>{
    getMovieVideos();
  },[]);


}

export default useMovieTrailer;