import React from "react";
import { ReactComponent as Star } from "./Icons/star.svg"

export const StarList = () => {
    return  <div className="rating__stars"><Star value="1"/>
                <Star value="2"/>
                <Star value="3"/>
                <Star value="4"/>
                <Star value="5"/>
            </div>
}