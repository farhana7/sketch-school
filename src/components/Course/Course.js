import React from 'react';

const Course = (props) => {
    console.log(props.tutorial);
    const { img, name, fee } = props.tutorial;
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Fee : {fee}</p>
        </div>
    );
};

export default Course;