// Imported Netflix Logo from Header Page
export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


// Whenever we Fetching the API, "Option" we need to  call in fetch("") -->So API_OPTION is common for all the API
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWE0Njc5MzIzNjUwNzcxMDA1Y2M1NDllY2JmYThjOSIsInN1YiI6IjY1ODU3ZGI0M2FjZDIwNTM4YTdiOWNhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9khKMpkZ0szTPBue4AIc9PZljqYDOG2vuHm_IyYkdfs'
    }
  };

  // Imported the Movie Image
  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

  //Imported the Netflix background Image
  export const BGC_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";


  //Imported the Languages(english,hindi,spanish) from "languageConstants"
  export const SUPPORTED_LANGUAGES=[{identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"} ] 
  
  //Imported the API key from ChatGpt
  export const OPENAI_KEY="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";