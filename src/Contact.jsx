import React, { useState } from 'react';

const Contact = () =>{
    const [data, setData] = useState({
        name:'',
        phone:'',
        email:'',
        message:'',
    });
    const changeEvent = (event) =>{
        const {name, value} = event.target;
        setData((preValue)=>{
            return {
            ...preValue,
            [name]: value,
            };
        });
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        alert(`Your Name is ${data.name}, Your phone number is ${data.phone} and Your Email address is ${data.email}`);
    };

    return(
        <>
            <div className="contact_main_div">
                <form className="form" onSubmit={onSubmit}>
                    <h1 className="contact_heading">Contact us</h1>
                    <label>Full Name</label>
                    <input 
                    type="text" 
                    placeholder="Enter your full Name" 
                    className="contact_input"
                    onChange={changeEvent}
                    name="name"
                    value={data.name}
                    />
                    <br/>
                    <label>Phone</label>
                    <input 
                    type="number" 
                    placeholder="Enter your phone number" 
                    className="contact_input"
                    onChange={changeEvent}
                    name="phone"
                    value={data.phone}
                    />
                    <br/>
                    <label>Email</label>
                    <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="contact_input"
                    onChange={changeEvent}
                    name="email"
                    value={data.email}
                    />
                    <br/>
                    <label>Message</label>
                    <textarea 
                    type="textarea" 
                    placeholder="" 
                    className="contact_input"
                    onChange={changeEvent}
                    name="message"
                    value={data.message}
                    />
                    <br/>
                    <button 
                    type="submit" 
                    className='contact_submit_button'>Submit
                    </button>
                </form>
            </div>
        </>
    );
};
export default Contact;