import React from "react";
import { ReactComponent as StarFill } from "./Icons/starFill.svg"

import './rating.css'
export const RatingReviews = ({rating}) => {

    function Stars(rating) {
        const starList = rating.rating
        if (starList) {
            return (
            <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return <StarFill key={i} className={`${starList < ratingValue ? "rating__star__null" : null }`}/>
            })} 
            </div>
            )
        } 
    }
    
    return  <><Stars rating={rating}/>
    </>
}
