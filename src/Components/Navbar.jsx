import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const all = ["Home", "About", "Projects", "Services", "Contact"];
  
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center nav-link">
        <span className="text-white text-3xl font-bold">Logo</span>
        <ul className="flex space-x-9 text-1xl">
          {all.map((item, index) => (
            <li key={index} className="text-white hover:text-pink-600 hover:underline">
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
