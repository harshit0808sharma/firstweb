import React from 'react';
import Data from './Data';
import Card from './Card';

const Learning = () =>{
        return(
            <>
            <div>
                {
                    Data.map((value,index)=>{
                        return <Card
                            imgsrc={value.imgsrc}
                            title={value.title}
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
