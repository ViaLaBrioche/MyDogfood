import React from "react";
import  "./home.scss"
import {ReactComponent as FirstOrderBanner} from "./image/bannerFirstOrder.svg"
import {ReactComponent as BannerSets} from "./image/bannerSets.svg"
import {ReactComponent as BannerOil} from "./image/bannerOil.svg"
import {ReactComponent as BannerPromo} from "./image/bannerPromo.svg"
import {ReactComponent as BannerPromo2} from "./image/bannerPromo2.svg"
import {ReactComponent as Arrow} from "./icons/arrow_right.svg"
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider";

export const Home = () => {
    const { cards } = useSelector((s)=> s.products)
    const titleHits = 'Хиты'
    const titleTasty = 'Лакомства'
    const titleNews = 'Новости'
    const titleViews = 'Вы смотрели'
    return <div className="home__first__order">
                <div><FirstOrderBanner className="background__hits"/></div>
                        <Slider title={titleHits} cards={cards}/>
                <div className="banner__promo">
                    <BannerSets/>
                    <BannerOil/>
                </div>
                <Slider title={titleTasty} cards={cards}/>
                <div className="banner__promo">
                    <BannerPromo2/>
                    <BannerPromo/>
                </div>
                <Slider title={titleNews} cards={cards}/>
                <div><FirstOrderBanner className="background__hits"/></div>
                <Slider title={titleViews} cards={cards}/>
            </div>
}