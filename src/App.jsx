import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RootElement from "./Components/RootElement";
import Projects from "./Components/Projects";
import Services from "./Components/Services";


const router = createBrowserRouter([
  {
    path: "",
    element: <RootElement />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
