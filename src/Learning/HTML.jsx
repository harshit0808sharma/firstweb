import React from 'react';
import { NavLink } from 'react-router-dom';

export const Html = () => {
  return ( 
    <>
        <div className="html_main_div">
          <div className="html_heading_div">
            <button className='html_back_btn'>{<NavLink exact to="/Learning"> Back </NavLink>}</button>
            <h1>HTML</h1> 
            <h2>Hyper Text Markup Language</h2>
          </div>
          <p className='border'/>
        </div>
    </>
  );
};
export default Html;

