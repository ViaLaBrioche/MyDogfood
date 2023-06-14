import React, { useContext } from "react";
import { UserContext } from "../../../context/Context";
import { Review } from "../../Reviews/Reviews";

export const ReviewsList = ({idProduct}) => {

    const {reviews} = useContext(UserContext)

    return <div>{reviews.map((e) => {
        return <Review key={e._id} {...e} idProduct={idProduct} review={e}/>})}</div>
}