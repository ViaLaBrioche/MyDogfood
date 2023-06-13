import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
import {ReactComponent as Phone} from "./Icons/phone.svg"
import {ReactComponent as Mail} from "./Icons/mail.svg"
import { Link, Navigate, useNavigate } from "react-router-dom";
import './userInfo.scss'


export const UserInfo = () => {
    const navigate = useNavigate()
    const {user, logout} = useContext(UserContext)
            
    return  <><Link className="favorite__btn__link" to="/my_dogfood">
                <button className="favorite__btn__back" type="button">Назад</button></Link>
            <h1>Профиль</h1>
            <div className="user__container">
                <div className="user__info">
                    <div className="user__avatar">
                        <p>Фото</p>
                        <img src={user.avatar} alt=""/>
                    </div>
                    <div className="user__data">
                        <h2>{user.name}</h2>
                        <div>
                            <Mail  className="user__mail user__icons"/>
                            <span>{user.email}</span>
                        </div>
                        <div>
                            <Phone className="user__phone user__icons"/>
                            <span>Контактный телефон</span>
                        </div>
                    </div>
                    <div className="user__btns">
                        <button className="user__btn user__btn_yellow" type="button" onClick={()=> navigate("/setuserinfo")}>Изменить</button>
                        <button className="user__btn" type="button" onClick={()=> logout()} >Выйти</button>
                    </div>
                </div>
            </div>
            </> 
}