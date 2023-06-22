import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Card } from "../Card/Card";


export const BasketCardsList= () => {
const {basketCards} = useContext(UserContext)
console.log(basketCards)

return (  
    <div className="cards__container">
    {basketCards.map((item) => {
      return <Card key={item.name} {...item} product={item} />;
    })}
  </div>
    )
}