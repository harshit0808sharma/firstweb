import React from 'react';


const ComHA = (props) => {
  return (
    <>
        <div className="home_page">
            <div className="heading_center">
                <h1 className='ha_padding'>{props.heading}</h1>
                <p className='ha_padding'>
                    {props.paragraph}
                </p>
                <button className="home_btn">{props.button}</button>
            </div>
            <div>
                <img src={props.img} className="image ha_padding" alt="computer"/>
            </div>
        </div>
    </>
  );
};

export default ComHA;

