import React from 'react'
import Login from './Login'
import Browse from './Browse'

const Body = () => {

    const appRouter=createBrowseRouter([
        {
          path:"/",
          element:<Body/>,
        },
      
        {
      
          path:"/browse",
          element:<Browse/>,
        },
      
      ]);
      
  return (
    <div>
        <Login/>
        <Browse/>
        </div>
  )
}

export default Body