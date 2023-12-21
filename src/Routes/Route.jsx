import {
    createBrowserRouter,
    
  } from "react-router-dom";

import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";

  const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            index : true ,
           element: <Home></Home>
        }
      ]
    },

  ]);

export default Route;