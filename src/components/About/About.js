import React from 'react';

const About = () => {
    return (
        <div className="bg-green-50" >

            <h2 className="bg-yellow-200 text-left text-5xl text-green-700">About Us</h2>

            <div className="grid gap-4 grid-cols-2 py-1.5 m-40">


                <p>The Sketch School serves as the primary outreach unit of The University of Dhaka, History of Art Department. We work with teachers to develop curriculum and to incorporate the best practices of using technology in the classroom, all in an effort to improve both teaching and learning in schools around the country.

                    The Sketch School is founded by Rafiqun Nabi and
                    Ahsan Habib (cartoonist)Professor with a grant from BETHA and is currently sponsored by GrameenPhone and The University of Dhaka, History of Art Department.

                    For more information about the Sketch School, contact us.</p>

                <img src="https://www.oregonlive.com/resizer/Vv4uaB6gAlcCcmsD24LhxmN-ma0=/700x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/XPZQULLYNNEYBEMRKFW5G3GOKA.jpg" alt="" />
            </div>

        </div>
    );
};

export default About;