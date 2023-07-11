import React from "react";
import { Accordion } from "../Accordion/Accordion"
import data from "../../data/accordionData.json"


export const AccordionList = () => {
    const accordionData = data;
    
    return (
        <div>
            <div className="accordion">
            {accordionData.map((item) => (
                <Accordion key={item.title} {...item}/>
            ))}
            </div>
        </div>
        );
    };