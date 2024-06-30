import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import RootElement from "./Components/RootElement";

// import Projects from "./Components/Projects";
// import Services from "./Components/Services";


const router = createBrowserRouter([
  {
    path: "",
    element: <RootElement />,
    children: [
      {
        index: true, 
        element:<Home/>
      },
      {
        path: "home",
        element: <Home />,
      },
      
    ]
   
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
