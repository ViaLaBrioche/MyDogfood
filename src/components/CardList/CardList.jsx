import React from "react";
import { Card } from "../Card/Card";

export const CardList = ({cards}) => {
    return (  
    <div className="cards__container">
    {cards?.map((item) => {
      return <Card key={item.name} {...item} product={item} />;
    })}
  </div>
    )
}