import React from  "react";
import { ReactComponent as LogoFooter } from "./Logo/logoFooter.svg";
import { ReactComponent as LogoInstagram } from "./Logo/logo-instagram.svg";
import { ReactComponent as LogoPhone } from "./Logo/logo-phone.svg";
import { ReactComponent as LogoTelegram } from "./Logo/logo-telegram.svg";
import { ReactComponent as LogoViber } from "./Logo/logo-viber.svg";
import { ReactComponent as LogoVk } from "./Logo/logo-vk.svg";
import { Link } from "react-router-dom";
import './footer.css';
import { memo } from "react";

export const Footer = memo(() => {
    
    return (
    <footer>
        
        <div className='main__container'>
            <div className="footer__container">
                <div className="footer__logo">
                    <LogoFooter/>
                    <span className="logo__info">© «Интернет-магазин DogFood.ru»</span>
                </div>
                <div className="footer__links">
                    <span>Каталог</span>
                    <span>Акции</span>
                    <span>Новости</span>
                    <span>Отзывы</span>
                </div>
                <div className="footer__links">
                    <span>Оплата и доставка</span>
                    <Link className="link" to="/faq"><span>Часто спрашивают</span></Link>
                    <span>Обратная связь</span>
                    <span>Контакты</span>
                </div>
                <div className="footer__links">
                    <span className="link__phone">Мы на связи</span>
                    <span className="link__phone">8 (999) 00-00-00</span>
                    <span className="link__email">dogfood.ru@gmail.com</span>
                    <div className="footer__icons">
                        <LogoPhone/>
                        <LogoTelegram/>
                        <LogoViber/>
                        <LogoVk/>
                        <LogoInstagram/>
                    </div>
                </div>
            </div>  
        </div>

    </footer>
    );
})