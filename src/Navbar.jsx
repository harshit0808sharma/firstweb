import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Dehaze';
import { useState } from "react";
//import Home from "./Home";

const Navbar = () =>{

    const[isMobile, setIsMobile] = useState(false);


    return(
        <>
            <div>
                <nav className="navbar">
                    <h1 className="logo"> Programming </h1>
                    <ol className={isMobile ? "nav_links_mobile" : "nav_links"}
                    onClick={() => setIsMobile(false)}
                    >
                        <li>
                            <NavLink exact to="/" className="menu" onClick={()=>setIsMobile(false)}> Home </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/About" className="menu" onClick={()=>setIsMobile(false)}> About </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/Learning" className="menu" onClick={()=>setIsMobile(false)}> Learning </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/Contact" className="menu" onClick={()=>setIsMobile(false)}> Contact </NavLink>
                        </li>
                    </ol>
                    
                    <button className="mobile_menu_icon"
                    onClick={() => setIsMobile(!isMobile)}
                    >
                        {isMobile ? (
                        <HomeIcon/>
                        ) : (
                        <HomeIcon/>
                        )}
                    </button>
                    </nav>    
            </div>
        </>
    );
};
export default Navbar;
