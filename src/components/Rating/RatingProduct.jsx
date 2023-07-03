import React from "react";
import { ReactComponent as StarFill } from "./Icons/starFill.svg"
import './rating.css'
import { useSelector } from "react-redux";

export const RatingProduct = () => {
    const { reviews } = useSelector((s)=> s.reviews)

    function Stars() {
        const counter = 0;
        const starList = reviews.map((e) => e.rating).reduce(
            (acc, num) => acc + num,
            counter
            )/reviews.length
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
    



    return  <> <Stars/>
    </>
}