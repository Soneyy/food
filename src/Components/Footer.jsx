import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div className="sticky bottom-0 left-0 w-full bg-gray-800 text-white py-2 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-center md:text-left text-sm">&copy; 2024 | All Rights Reserved.</p>
        <div className="flex justify-center md:justify-end gap-4">
          <a href="https://github.com/Soneyy" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-500">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/SoniSherpa" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/Soneyy__" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-600">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
