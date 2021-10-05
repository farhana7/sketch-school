import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Service = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("./tutorials.JSON")
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, []);

  return (
    <div>
      <h2 className="bg-yellow-200 text-5xl text-green-700">Our Courses</h2>
      <div className="grid gap-4 grid-cols-3">
        {tutorials.map((tutorial) => (
          <Course tutorial={tutorial}></Course>
        ))}

        <img src={tutorials.img} alt="" />
        <h3> {tutorials.name}</h3>
        <h4>{tutorials.fee}</h4>
      </div>
    </div>
  );
};

export default Service;
