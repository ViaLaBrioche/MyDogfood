import React from "react";
import { useDispatch } from "react-redux";
import {ReactComponent as Minus} from './Icons/minus.svg'
import {ReactComponent as Plus} from './Icons/plus.svg'
import { memo } from "react";
import { addToBasket, decrement, deleteFromBasket, increment } from "../../storageToolkit/slices/productsSlice";


export const CounterBtn = memo(({product, id}) => {
    const dispatch = useDispatch()

    const handleClickPlus = () => {
        if (product) { 
            if(product.countItem < product.stock)
        dispatch(increment(product._id))
        } else {dispatch(addToBasket(id)) }

    }
    const handleClickMinus = () => {
        if (product) {
            if(product.countItem === 1) {
                dispatch(deleteFromBasket(id))
            }
            else {dispatch(decrement(product._id))}  
        } 
    }

    return <div id="counter">
                
                <button type="button"  className='counter__btns' onClick={() => handleClickMinus(product)}><Minus className={product && product.countItem !== 0 ? "minus__active" : undefined }/></button>
                <div id="buttonCountNumber"><b>{product ? product.countItem : 0}</b></div>
                <button type="button" className="button__count__plus counter__btns" value={<Plus/>} onClick={() => handleClickPlus(product)}><Plus/></button>
            </div>
}
)