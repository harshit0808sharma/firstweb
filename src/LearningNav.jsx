import React from "react";
import { NavLink } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Html from './HTML';
import CSS from './CSS';
import Javascript from './Learning/Javscript';
const LearningNav = () =>{
    return(
        <>
            <div className="language_div">
                <ol className="language_list">
                    <li className="learning_nav">
                        <NavLink exact to="learning/html">HTML</NavLink>
                    </li>
                    <li className="learning_nav">
                        <NavLink exact to="/Learning/css">CSS</NavLink>
                    </li>
                    <li className="learning_nav">
                        <NavLink exact to="/Learning/Javascript">Javascript</NavLink>
                    </li>
                </ol>
            </div>
        </>
    );
};
export default LearningNav;
