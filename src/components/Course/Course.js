import React from "react";

const Course = (props) => {
  console.log(props.tutorial);
  const { img, name, fee } = props.tutorial;
  return (
    <div>
      <img className="w-80 h-4/6 pt-24 pl-7" src={img} alt="" />
      <h4 className="font-bold text-green-800">{name}</h4>
      <p> Fee : {fee}</p>
    </div>
  );
};

export default Course;
