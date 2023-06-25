import React from "react";

import {ReactComponent as Minus} from './Icons/minus.svg'
import {ReactComponent as Plus} from './Icons/plus.svg'

export const CounterBtn = ({product, counter, setCounter}) => {

    

    const productAddAlert = () => {
        product.stock > counter &&
        setCounter(counter + 1)
        return
    }

    return <div id="counter">
                <button type="button"  className='counter__btns' onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}><Minus className={!!counter && "minus__active"}/></button>
                <div id="buttonCountNumber"><b>{counter}</b></div>
                <button type="button" className="button__count__plus counter__btns" value={<Plus/>} onClick={() => productAddAlert()}><Plus/></button>
            </div>
}