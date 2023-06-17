import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Data from './Data';
import Card from './Card';

import LearningNav from './LearningNav';

const Learning = () =>{
        return(
            <>
            <div className="learning_main_div">
                <div className="learnig_links">
                    {/* <LearningNav/> */}
                    
                </div>
                {
                    Data.map((value,index)=>{
                        return <Card
                            imgsrc={value.imgsrc}
                            title={value.title+ '1'}
                            sname={value.sname}
                            link={value.link}
                            key={index}
                        />
                    })
                }
            </div>
            </>
        );
    };
export default Learning;