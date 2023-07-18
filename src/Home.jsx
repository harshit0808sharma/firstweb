import React from 'react';
import ComHA from './ComHA';
import img1 from './images/programming2.png';
import { NavLink } from 'react-router-dom';
//import Learning from './Learning';
//import Navbar from './Navbar';

const Home = () =>{
    return(
        <>
            <section className="home_center_div">
                <ComHA
                heading="Welcom to Web Development Programming"
                paragraph="In this website developing tutorial we will learn HTMl,CSS and JavaScript in details.
                so you can ready to start Web Developing"
                button={<NavLink exact to="/Learning" > Get Start </NavLink>}
                img={img1}
                />
            </section>
        </>
    );
};
export default Home;

