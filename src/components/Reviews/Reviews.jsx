import React, { useContext } from "react";
import './reviews.scss';
import { UserContext } from "../../context/Context";
import { Rating } from "../Rating/Rating";


export const Review = ({text, author, created_at, rating, _id, idProduct}) => {

    const {deleteReview} = useContext(UserContext)

    return <div className="product__reviews__container">
        <div className="product__reviews__up">
            <h3 className="reviews__author__name">{author.name}</h3>
            <p className="review__date">{created_at.substr(0, 10)}</p>
        </div>
        <div className="rating__stars"><Rating rate={rating}/></div>
        <p>{text}</p>
        <button className="review__btns" onClick={(e)=> deleteReview(_id, idProduct)}>Удалить</button>
    </div>
} 