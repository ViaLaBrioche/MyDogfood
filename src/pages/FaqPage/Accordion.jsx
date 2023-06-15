import React from "react";
import { useState } from "react";

export const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion_item">
            <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
        );
    };