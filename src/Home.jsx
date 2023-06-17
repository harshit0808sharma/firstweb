import React from 'react';
import ComHA from './ComHA';
import img1 from './images/programming2.png';

const Home = () =>{
    return(
        <>
            <section>
                <ComHA
                heading="Welcom to Web Development Programming"
                paragraph="In this website developing tutorial we will learn HTMl,CSS and JavaScript in details.
                so you can ready to start Web Developing"
                button="Get Start"
                img={img1}
                />
            </section>
        </>
    );
};
export default Home;
