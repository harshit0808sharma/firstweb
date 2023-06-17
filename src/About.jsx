import React from 'react';
import ComHA from './ComHA';
import img2 from './images/programming3.png';

const About = () =>{
    return(
        <> 
            <div className='about_main_div'>
                <div className="about_center_div">
                    <ComHA
                    heading="About us"
                    paragraph="Hello guys, If you learn whole HTML, CSS and JavaScript tutorial. You can easily build websites. We hope that you will learn full tutorial"
                    button="click to more about"
                    img={img2}
                    />
                </div>
            </div>
        </>
    );
};
export default About;