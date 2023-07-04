import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ReactComponent as Minus} from './Icons/minus.svg'
import {ReactComponent as Plus} from './Icons/plus.svg'
import { memo } from "react";
import { decrement, increment } from "../../storageToolkit/slices/productsSlice";


export const CounterBtn = memo(({product, counter}) => {
    const dispatch = useDispatch()

    const handleClickPlus = () => {
        if(product.countItem < product.stock)
        dispatch(increment(product._id))
    }
    const handleClickMinus = () => {
        
        if(product.countItem=== 1) return;
        else {dispatch(decrement(product._id))
        }

        
    }

    return <div id="counter">
                
                <button type="button"  className='counter__btns' onClick={() => handleClickMinus(product)}><Minus className={product.countItem !== 1 ? "minus__active" : undefined}/></button>
                <div id="buttonCountNumber"><b>{product.countItem || counter}</b></div>
                <button type="button" className="button__count__plus counter__btns" value={<Plus/>} onClick={() => handleClickPlus(product)}><Plus/></button>
            </div>
}
)