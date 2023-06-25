import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './userInfo.scss'


export const SetUserInfo = () => {
    const {user, setUserSubmit} = useContext(UserContext)
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: user.name,
            email: user.email
    }})
   
            
    return   <><Link to="/userInfo">
                    <button className="btn__back">Назад</button></Link>
            <h1>Редактирование профиля</h1>
            <div className="user__container">
                <div className="user__info">
                    <div className="user__avatar">
                        <img src={user.avatar} alt=""/>
                    </div>
                    <form className="modal__form" onSubmit={handleSubmit(setUserSubmit)}>
                    <div className="user__data">
                        <h2>Мои данные</h2>
                        <label htmlFor="name">Имя</label>
                        <input id="name" type="text"   {...register("name")} />
                        <label htmlFor="email" >Почта</label>
                        <input id="email" type="email" {...register("email")} />
                        <h3>Смена аватара</h3>
                        <label htmlFor="avatar">Адрес на картинку</label>
                        <input id="avatar" type="text" {...register("avatar")} /> 
                    </div>
                    <div className="user__btns">
                        <button type="submit" className="user__btn">Сохранить</button>
                    </div>
                    </form>
                </div>
            </div>
        </> 
}