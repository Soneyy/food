import { useState } from "react";

const About = () => {
  const handleClick = () => {
    
    window.open(
      "https://drive.google.com/file/d/1I8aQRb4GjTn0KJNORi1nTfJ8MPx9V70M/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-20 space-y-8 md:space-y-0">
        <div className="w-90 h-80 overflow-hidden border-2 border-black img_glow ">
          <img
            src="/about.jpg"
            alt="Soni Sherpa"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-2xl text-center md:text-left max-w-2xl leading-relaxed space-y-4 md:space-y-6">
  <h1 className="text-5xl font-bold mb-4 text-pink-600">
    Get to know me!
  </h1>
  <p className="mb-4">
    My name is <span className="text-pink-600">Soni Sherpa</span>. I have completed my Bachelor's degree in
    Computer Science with a major in Computing.
  </p>
  <p>
    I love to create projects with beautiful designs and put my own
    twists on it, you can check out some of my work in the projects
    section.
  </p>
  <p>
    I am open to new collaborations or work where I can contribute and
    grow. Feel free to connect with me, links are in the footer. Apart
    from coding I love to make discord servers, designs, and do
    photography in my spare time.
  </p>
  <button
    onClick={handleClick}
    className="neno-button shadow-xl bg-pink-600  hover:bg-white  hover:text-pink-600 text-white border-2 hover:bg-pink-600 rounded-lg py-2 px-8 uppercase relative overflow-hidden"
  >
    Resume
  </button>
</div>
      </div>
    </div>
  );
};

export default About;
