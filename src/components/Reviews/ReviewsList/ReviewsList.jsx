import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductReviews } from "../../../storageToolkit/slices/reviewsSlice";
import { Review } from "../Review";

export const ReviewsList = ({idProduct}) => {

    
    const {reviews } = useSelector((s) => s.reviews)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProductReviews(idProduct))
    },[dispatch])

    return <div>{reviews.map((e) => {
        return <Review key={e._id} {...e} idProduct={idProduct} review={e}/>})}</div>
}