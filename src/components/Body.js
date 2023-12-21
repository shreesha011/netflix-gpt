import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch=useDispatch();

  // Created the router for navigating the path 
    const appRouter=createBrowserRouter([
        {
          path:"/",
          element:<Login/>,
        },
      
        {
      
          path:"/browse",
          element:<Browse/>,
        },
      
      ]);

      //When the user Signin/SignUp data will add to Store thats why we use "onAuthStateChanged" using dispatch function
      //component uses useEffect to subscribe to the onAuthStateChanged event. 
      useEffect(() =>
      {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          

          } else {
            // User is signed out  and it will remove from the store and navigate to Home Page
            dispatch(removeUser());
            
          }
        });

      },[]);
      
  return (
    <div>
      {/* Used RouterProvider to provide the created router to the component tree. */}
       <RouterProvider router={appRouter} />
        </div>
  )
}

export default Body