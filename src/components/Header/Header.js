import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-600 text-yellow-100">
      <nav className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/instructors">Instructors</NavLink>
      </nav>
    </header>
  );
};

export default Header;
