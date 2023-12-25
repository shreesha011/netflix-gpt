import { onAuthStateChanged, signOut } from 'firebase/auth';
import {useEffect} from "react";
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch=useDispatch();
  const user=useSelector(store =>store.user);
  const navigate=useNavigate();

  const handleSignOut =() =>
  {
    signOut(auth).then(() => {
      // Sign-out successful.
    //  navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  //When the user Signin/SignUp data will add to Store thats why we use "onAuthStateChanged" using dispatch function
      //component uses useEffect to subscribe to the onAuthStateChanged event. 
      useEffect(() =>
      {
        const unsubcribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(
              addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              })
              );
                navigate("/browse");

          } else {
            // User is signed out  and it will remove from the store and navigate to Home Page
            dispatch(removeUser());
            navigate("/");
            
          }
        });

        // Unsubscribe when component unmounts
        return () => unsubcribe();

      },[]);
      

  return (
    <div className="fixed w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img className="w-44"
      //imported from constants file
      src ={LOGO}
      alt="logo" />

      {/* when the user is Signed In then Signout button Should Load */}
      {user &&
        <div className='flex p-2'>
        <img 
        className="w-12 h-12"
        alt="usericon" 
        src="https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        />

        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header