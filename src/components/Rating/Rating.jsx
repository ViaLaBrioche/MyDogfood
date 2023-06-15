import React from "react";
import { ReactComponent as StarFill } from "./Icons/starFill.svg"

import './rating.css'
export const Rating = ({rate}) => {

    function Rate(rate) {
        const rating = rate.rate
            if (rating) {
            return <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return <StarFill className={`${rating < ratingValue ? "rating__star__null" : null }`}/>
            })}
            </div>

        } 
    }
    
    return  <><Rate rate={rate}/>
    </>
}
