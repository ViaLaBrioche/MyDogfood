import React from "react";
import { useState } from "react";
import {ReactComponent as Minus } from "./Icons/minus.svg";
import {ReactComponent as Plus } from "./Icons/plus.svg";

export const Accordion = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion__item">
            <div className="accordion__title" onClick={() => setIsActive(!isActive)}>
                <div className="accordion__symbol">{isActive ? <Minus className="accordion__minus"/> : <Plus/>}</div>
                <p>{title}</p>
            </div>
            {isActive && <p className="accordion__content">{content}</p>}
        </div>
        );
    };