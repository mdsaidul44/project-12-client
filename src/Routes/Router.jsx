import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/Registration/Registration";
import Blog from "../Pages/Home/BlogPage/Blog/Blog";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorElement/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path: 'login',
            element:<Login/>
        },
        {
          path: 'registration',
          element: <Registration/>
        },
        {
          path: 'blog',
          element: <Blog/>
        }
      ]
    },

  ]);


  export default router