import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
            <div>
                <ol className="navbar_list">
                    <li>
                        <h4 className="heading"> Programming </h4>
                    </li>
                    <ol className="menu_list">
                        <li>
                            <NavLink exact to="/" className="menu"> Home </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/About" className="menu"> About </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/Learning" className="menu"> Learning </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/Contact" className="menu"> Contact </NavLink>
                        </li>
                    </ol>
                </ol>
            </div>
        </>
    );
};
export default Navbar;
