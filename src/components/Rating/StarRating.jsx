import React, {useState} from "react";
import {ReactComponent as Star} from "./Icons/starFill.svg"
import './rating.scss';


export const  StarRating = ({rating, setRating}) => {

    const [hover, setHover] = useState(3)
    

    return (
            <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return <label>
                    <input type="radio" name="rating"
                        value={ratingValue}
                        onClick={()=> setRating(ratingValue)} />
                    <Star key={''} className={`${(hover || rating) < ratingValue ? "rating__star__null" : null }`}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                        />
                    </label>
            })}
            </div>
    )
}