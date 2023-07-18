import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) =>{

    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="random" className="card_img" />
                    <div className="card_info" >
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">{props.sname}</h3>
                        <NavLink to={props.link}>
                            <button className="learning_button">Click to Learn</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
