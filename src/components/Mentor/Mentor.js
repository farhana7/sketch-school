import React from "react";

const Mentor = (props) => {
  console.log(props.teacher);
  const { img, name } = props.teacher;
  return (
    <div>
      <img className="w-80 h-4/6 pt-24 pl-7" src={img} alt="" />
      <br />
      <h4 className="font-bold text-green-800">{name}</h4>
    </div>
  );
};

export default Mentor;
