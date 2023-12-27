import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { BGC_IMAGE } from "../utils/constants";
// import { addUser } from "../utils/userSlice";


const Login =()  =>
{
     
    const[isSignInForm,setIsSignInForm] =useState(true);
    const [errorMessage,setErrorMessage] =useState(null);
    const dispatch=useDispatch();
 
    //Create a refernce to the input box
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
     
    const   handleButtonClick = () =>
    {
       const message=checkValidData(email.current.value,password.current.value)
       setErrorMessage(message);
       
       //If the message is invalid then it should return (It will not move to Signup/Sign In Page)
       if(message) return;
       
        //Sign In  && Sign Up Logic
        if(!isSignInForm)
        {
            //Sign Up logic 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                 
            .then((userCredential) => 
            {
            // Signed up means its Signed In
            const user = userCredential.user;
            // console.log(user);
            
            })
              

        // Otherwise it will throw the Error like error code && message
          .catch((error) =>
         {
          const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode+ "-" +errorMessage);
         });


        }

        else{
        //Sign In Logic
        signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
            )
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        })

        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + "-" + errorMessage);
         });

        }

    

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
        <img src={BGC_IMAGE}
        alt="logo"/>
        </div>

        <form onSubmit={(e) =>e.preventDefault()}
        className="w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">

                {/* Conditional Renedring is used toggle to signin and Signup form */}
                {isSignInForm ? "Sign In" :"Sign UP"}
              </h1>
            
                <input
                // email is refernced to the input box
                ref={email}
                type="email"  
                placeholder="Email Address" 
                // name="email"
                className="p-4 my-4 w-full bg-gray-700"
                />
        

            { !isSignInForm  && (
                <input
                type="text" 
                placeholder="Full Name" 
                className="p-4 my-4 w-full bg-gray-700"/> 
             ) }
              
            <input
             ref={password}
            type="password" 
            placeholder="Password" 
            // name="password"
            className="p-4 my-4 w-full bg-gray-700" />
          

            <p className="text-red-500 font-bold text-lg py-10">{errorMessage}</p>

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

