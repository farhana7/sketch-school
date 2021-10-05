import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-green-800 p-2 text-white">
      <nav className="flex items-center justify-between">
        <div>
          <h1> Contact us : +880.......... </h1>
        </div>
        <div className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/instructors">Instructors</NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
