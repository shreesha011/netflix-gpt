import Login from './Login'
import Browse from './Browse'
import { RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

const Body = () => {

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

      
  return (
    <div>
      {/* Used RouterProvider to provide the created router to the component tree. */}
       <RouterProvider router={appRouter} />
        </div>
  )
}

export default Body