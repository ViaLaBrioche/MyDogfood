import React from "react";
import './reviews.scss';
import { RatingReviews } from "../Rating/RatingReviews";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../storageToolkit/slices/reviewsSlice";


export const Review = ({text, author, created_at, rating, _id, idProduct}) => {

    const dispatch = useDispatch()

    const handleClickDeleteReview = (idRev, idProduct)=> {
        return dispatch(deleteReview({idRev, idProduct}))
    }
    
    return <div className="product__reviews__container">
        <div className="product__reviews__up">
            <h3 className="reviews__author__name">{author.name}</h3>
            <p className="review__date">{created_at.substr(0, 10)}</p>
        </div>
        <div className="rating__stars"><RatingReviews rating={rating}/></div>
        <p>{text}</p>
        <button className="review__btns" onClick={()=> handleClickDeleteReview(_id, idProduct)}>Удалить</button>
    </div>
} 