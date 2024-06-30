import React from 'react';
import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <div className="bg-primary text-white p-2 flex justify-center gap-1">
      <p>©Copyright 2024 all right reserved | Designed by </p>
      <img src={logo2} alt="Logo" className="h-5" />
    </div>
  );
};

export default Footer;
