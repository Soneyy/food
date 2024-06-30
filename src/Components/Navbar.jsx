import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const all = ["Home", "Pho99", "Menu", "Location", "Gallery", "Vacancy", "News", "Contact"];
  const locations = [
    { name: "Jhamsikhel", url: "https://foodmandu.com/Restaurant/Details/324" },
    { name: "Lazimpat", url: "https://foodmandu.com/Restaurant/Details/1664" },
    { name: "Boudha", url: "https://foodmandu.com/Restaurant/Details/845" }
  ];

  const handleClick = (item) => {
    setActiveTab(item.toLowerCase());
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-primary py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} className='h-12' alt="Logo" />
        <ul className="hidden md:flex space-x-9 text-xl justify-center flex-1">
          {all.map((item, index) => (
            <li key={index} className={`hover:text-red-600 ${activeTab === item.toLowerCase() ? 'text-red-600' : 'text-primary-light'}`}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div 
          className="relative m-7"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button
            className="text-white font-medium py-2 px-4 rounded-full border-2 border-primary bg-primary"
          >
            Order from Foodmandu
          </button>
          {showDropdown && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
            >
              {locations.map((location, index) => (
                <a
                  key={index}
                  href={location.url}
                  className="block px-4 py-2 hover:bg-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {location.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <button className="block md:hidden text-3xl" onClick={() => setShowDropdown(!showDropdown)}>
          &#9776;
        </button>
      </div>
      {showDropdown && (
        <div className="md:hidden absolute left-0 w-full bg-white text-black">
          <ul className="flex flex-col items-start p-4">
            {all.map((item, index) => (
              <li key={index} className="py-2 text-lg w-full hover:bg-gray-100">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    handleClick(item);
                    setShowDropdown(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="py-2 text-lg w-full hover:bg-gray-100">
              <button
                className="w-full text-left"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                Order from Foodmandu
              </button>
              {showDropdown && (
                <div
                  className="mt-2 w-full bg-white text-black rounded-lg shadow-lg"
                >
                  {locations.map((location, index) => (
                    <a
                      key={index}
                      href={location.url}
                      className="block px-4 py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {location.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
