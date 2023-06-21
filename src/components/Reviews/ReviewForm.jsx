import React, {useState, useContext, useEffect} from "react";
import {ReactComponent as Star} from "./Icons/starFill.svg"
import './reviews.scss';
import { UserContext } from "../../context/Context";
import { useForm } from "react-hook-form";

export const  ReviewForm = ({idProduct}) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    
    const {setOpenTextarea, openTextarea, addReviewsSubmit, updateReviews} = useContext(UserContext)
        const {register, handleSubmit, reset, formState: {errors}} = useForm({
            mode: 'onChange',
            defaultValues: {
            id: `${idProduct}`,
            'text': '',
            rating: '',
        }
        })

    useEffect(()=> {
        return  updateReviews(idProduct)
    }, [])

    useEffect(() => {
        reset()
    }, [addReviewsSubmit])

    
    return (<div>
                <form onSubmit={handleSubmit(addReviewsSubmit)}>
                    <h2>Отзывы</h2>
                    {openTextarea ? <div className="product__reviews__text">
                    <div>
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return (<label>
                        <input type="radio" name="rating" {...register('rating', {required: "Укажите оценку"})}
                            value={ratingValue}
                            onClick={()=> setRating(ratingValue)} />
                        <Star key={i} className={`star ${(hover || rating) < ratingValue ? "rating__star__null" : null }`}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={()=> setHover(null)}/>
                    </label>)
                    })}
                        {errors.rating  && <span className="errors">{errors.rating.message}</span>}
                    </div>
                <textarea cols="70" rows="15" {...register("text",
                    {required: "Поле обязательно для заполнения"})}></textarea>
                    {errors?.text && <span className="error__textarea">{errors.text.message}</span>}
                <button type="submit" >Отправить</button>
            </div>
            :
            <button className="write__review__btn" onClick={()=> setOpenTextarea(true)}>Написать отзыв</button>
            }
        </form>
    </div>
    )
}