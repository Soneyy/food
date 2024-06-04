import React from "react";

import { useNavigate } from "react-router-dom";

  const Home = () => {
    const navigate = useNavigate();
  
    const handleAboutClick = () => {
      navigate("/about");
    };
  
    const handleContactClick = () => {
      navigate("/contact");
    };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl px-8">
        <div className="md:mr-16 mb-8 md:mb-0 max-w-lg"> {/* Adjusted margins and added max-w-lg */}
          <h1 className="text-6xl font-bold mb-4">Hello there!</h1>
          <p className="text-6xl mb-8">
            I'M <span className="text-pink-600">Soni Sherpa</span>{" "}
          </p>
          <p className="text-4xl mb-8">Frontend Developer</p>
          <div className="flex space-x-4">
            <button onClick={handleAboutClick}className="bg-pink-600 hover:bg-white text-white hover:text-pink-600 py-2 px-4 rounded-lg uppercase w-44 h-15">About me</button>
            <button onClick={handleContactClick}className="bg-pink-600 hover:bg-white text-white hover:text-pink-600 py-2 px-4 rounded-lg uppercase w-44">Contact me</button>
          </div>
        </div>
        <div className="w-96 h-96 rounded-full overflow-hidden border-2 border-black img_glow"> {/* Adjusted width and height */}
          <img
            src="/soni.jpg"
            alt="Soni Sherpa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
