import React from "react";
import  "./home.scss"
import {ReactComponent as BackOrange} from "./image/bannerFirstOrder.svg"
import {ReactComponent as Arrow} from "./icons/arrow_right.svg"
import { useSelector } from "react-redux";

export const Home = () => {
    const { cards } = useSelector((s)=> s.products)
    const cardsHits = cards.filter((e) => e.likes.length > 1)
    console.log(cardsHits)

    return <div className="home__first__order">
                <div><BackOrange className="background__hits"/></div>
                <div className="home__hits">
                    <div className="hits__up">
                        <h1>Хиты</h1>
                        <div className="hits__btns">                        
                            <Arrow className="arrow__left"/>
                            <Arrow/>
                        </div>
                        </div>
                        <div className="slider__list">
                            
                        </div>
                        
                </div>
                
            </div>
}