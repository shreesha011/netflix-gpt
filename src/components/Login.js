import React, { useState } from "react";
import Header from "./Header";


const Login =()  =>
{
     
    const[isSignInForm,setIsSignInForm] =useState(true);
     
    const   handleButtonClick = () =>
    {

    }
    const toggleSignInForm = () =>
    {
        // It should toggle to Signup form if the form is Signin
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header/>

        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
    alt="logo"  />
        </div>

        <form className="w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">

                {/* Conditional Renedring is used toggle to signin and Signup form */}
                {isSignInForm ? "Sign In" :"Sign UP"}
              </h1>
            
                <input
             type="text"  
             placeholder="Email Address" 
              className="p-4 my-4 w-full bg-gray-700"/>
        

            { !isSignInForm  && (
                <input
             type="text" 
              placeholder="Full Name" 
               className="p-4 my-4 w-full bg-gray-700"/> 
             ) }
              
            <input
             type="password" 
              placeholder="Password" 
               className="p-4 my-4 w-full bg-gray-700"/>

            <button className="p-4 my-8 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" :"Sign UP"}
                </button>

            {/* Once we clicked on Signup form then it should toggle to  Signup Form in the Top */}
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? 
            "New to Netflix?Sign Up Now"
             :"Alreday registered ? Sign In"}
                </p>
        </form>
        </div>
    )

}

export default Login;

