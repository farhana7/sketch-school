import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Course from "../Course/Course";

const Header = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, []);

  return (
    <div>
      <h1 className="bg-red-600 bg-contain text-5xl  text-white">
        Sketch School : A Platform for Cartoonists
      </h1>

      <div className="grid gap-4 grid-cols-2 py-1.5 m-40">
        <img
          src="https://bloximages.newyork1.vip.townnews.com/bluemountaineagle.com/content/tncms/assets/v3/editorial/6/41/641a9958-c551-11ea-a27b-6b51bcd67f17/5f0cd4b6924d8.image.jpg"
          alt=""
        />

        <p>
          Cartoons make an integral part of newspapers, conveying messages or
          expressing public opinion immaculately. They are also considered as
          the pictorial overture or introduction to any key event or personality
          and the readers love them.
          <br />
          <br />
          <br />
          The activity of drawing can be very fulfilling as it helps in engaging
          various cognitive domains in creating, evaluating, analyzing,
          applying, and assimilating information. Cartooning also improves
          hand-eye coordination, motor skills, observation skills, and eye for
          detail that will keep them in good stead for life!
          <br />
          <br />
          Editorial cartoons, like written editorials, have an educational
          purpose. They are intended to make readers think about current
          political issues. Editorial cartoons must use a visual and verbal
          vocabulary that is familiar to readers.
        </p>
        <br />
        <h1 className="font-bold text-gray-600">
          Think out of the box, choose your career where less travelled by.
        </h1>
      </div>
      <div className="flex gap-6">
        <h1 className="font-bold text-4xl text-green-900 italic text-left">
          Our Courses
        </h1>

        {tutorials.map((tutorial) => (
          <Course tutorial={tutorial}></Course>
        ))}
        <NavLink className="w-32 h-7 bg-gray-400" to="/service">
          Service
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
