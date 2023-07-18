import React from 'react';
import { NavLink } from 'react-router-dom';
//import Topics from './JavaScriptTopics';
//import Design from './TopicDesign';

const Javascript = () => {
  return (
    <>
      <div className="javascript_main_div">
            <button className='javascript_back_btn'>{<NavLink exact to="/Learning"> Back </NavLink>}</button>
                <div className="javascript_heading_div">
                    <h1>JavaScript</h1> 
                </div>
                <p className='border'/>
        </div>
    </>
  );
};

export default Javascript;