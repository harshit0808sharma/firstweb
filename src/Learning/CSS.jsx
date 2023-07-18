import React from "react";
import { NavLink } from "react-router-dom";

const CSS = () =>{
    return(
        <>
            <div className="css_main_div">
                <button className='css_back_btn'>{<NavLink exact to="/Learning"> Back </NavLink>}</button>
                    <div className="css_heading_div">
                        <h1>CSS</h1> 
                        <h2>Cascading Style Sheet</h2>
                    </div>
                    <p className='border'/>
            </div>
        </>
    );
};
export default CSS;
