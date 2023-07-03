import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {ReactComponent as Minus} from './Icons/minus.svg'
import {ReactComponent as Plus} from './Icons/plus.svg'
import { memo } from "react";
import { increment, decrement } from "../../storageToolkit/slices/counterSlice";

export const CounterBtn = memo(({product}) => {
    const dispatch = useDispatch()
    const {value: counter} = useSelector((s)=> s.counter)
    
    const handleClickPlus = () => {
        if(counter < product.stock)
        dispatch(increment(1))
    }
    const handleClickMinus = () => {
        if(counter > 0)
        dispatch(decrement(1))
    }


    return <div id="counter">
                <button type="button"  className='counter__btns' onClick={() => handleClickMinus()}><Minus className={counter && "minus__active"}/></button>
                <div id="buttonCountNumber"><b>{counter}</b></div>
                <button type="button" className="button__count__plus counter__btns" value={<Plus/>} onClick={() => handleClickPlus()}><Plus/></button>
            </div>
}
)