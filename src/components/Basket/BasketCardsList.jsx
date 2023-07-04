import React from "react";
import { CardBasket } from "../CardBasket/CardBasket";
import './basket.scss'
import { useSelector } from "react-redux";
export const BasketCardsList= () => {

  const {basketCards} = useSelector((s)=> s.products)


return (  
    <div className="basket__left">
    {basketCards.map((item) => {
      return <CardBasket key={item.name} {...item} product={item} />;
    })}
  </div>
    )
}