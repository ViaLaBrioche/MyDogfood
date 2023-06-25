import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { CardBasket } from "../CardBasket/CardBasket";
import './basket.scss'
export const BasketCardsList= () => {

const {basketCards} = useContext(UserContext)

return (  
    <div className="basket__left">
    {basketCards.map((item) => {
      return <CardBasket key={item.name} {...item} product={item} />;
    })}
  </div>
    )
}