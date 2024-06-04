import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNpm } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Services = () => {
  const skills = [
    { icon: <FaHtml5 className="text-6xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-6xl" />, name: "CSS" },
    { icon: <FaJs className="text-6xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-6xl" />, name: "React" },
    { icon: <FaNpm className="text-6xl" />, name: "Npm" },
    { icon: <IoLogoJavascript className="text-6xl" />, name: "JavaScript" },
    { icon: < RiTailwindCssFill className="text-6xl" />, name: "Tailwind" },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className='min-h-screen p-20 flex flex-col items-center justify-center bg-gray-900 text-white'>
      <h1 className='text-5xl font-semibold mb-20 leading-normal uppercase text-pink-600'>Skills</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-12'>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="b_glow p-9 rounded shadow-lg flex items-center justify-center h-40 w-60 border-2 border-pink-600 hover:bg-pink-600"

            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {hoveredSkill === index ? <span className="text-2xl">{skill.name}</span> : skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
