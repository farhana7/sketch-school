import React, { useEffect, useState } from "react";
import Mentor from "../Mentor/Mentor";

const Instructors = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("./teacher.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div>
      <h2 className="bg-yellow-200 text-left text-5xl text-green-700">
        Our honourable Instructors
      </h2>

      <div className="grid gap-7 grid-cols-3">
        {teachers.map((teacher) => (
          <Mentor teacher={teacher}></Mentor>
        ))}

        <img src={teachers.img} alt="" />
        <h3> {teachers.name}</h3>
      </div>
    </div>
  );
};

export default Instructors;
