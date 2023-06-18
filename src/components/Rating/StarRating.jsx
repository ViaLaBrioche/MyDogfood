import React, {useState} from "react";
import {ReactComponent as Star} from "./Icons/starFill.svg"
import './rating.css';


export const  StarRating = ({register, errors}) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    
    return (
            <div className="stars">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return <label>
                    <input type="radio" name="rating" {...register('rating', {required: true})}
                        value={ratingValue}
                        onClick={()=> setRating(ratingValue)} />
                        
                    <Star key={''} className={`star ${(hover || rating) < ratingValue ? "rating__star__null" : null }`}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                        />
                    </label>
            })}
            {errors.rating  && <span className="errors">Укажите оценку</span>}
            </div>
    )
}