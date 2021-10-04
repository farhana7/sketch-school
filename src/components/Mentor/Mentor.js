import React from 'react';

const Mentor = (props) => {
    console.log(props.teacher);
    const { img, name, } = props.teacher;
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>

        </div>
    );
};

export default Mentor;