import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './userInfo.scss'


export const SetUserInfo = () => {

    const {register, handleSubmit} = useForm({})
    const {user, setUserSubmit, setAuthorizedPasswordSubmit, saveSetUserInfo} = useContext(UserContext)
            
    return   <><Link className="favorite__btn__link" to="/userInfo">
                    <button className="favorite__btn__back">Назад</button></Link>
            <h1>Редактирование профиля</h1>
            <div className="user__container">
                <div className="user__info">
                    <div className="user__avatar">
                        <p>Фото</p>
                        <img src={user.avatar} alt=""/>
                    </div>
                    <form className="modal__form" onSubmit={handleSubmit(setUserSubmit)}>
                    <div className="user__data">
                        <h2>Мои данные</h2>
                        <label htmlFor="name">Имя</label>
                        <input id="name" type="text"  placeholder={user.name} {...register("name")} />
                        <label htmlFor="email" >Почта</label>
                        <input id="email" type="email" placeholder={user.email} {...register("email")} />
                    {/* <form className="modal__form" onSubmit={handleSubmit(setAuthorizedPasswordSubmit)}>    
                        <h3>Смена пароля</h3>
                        <label htmlFor="oldPass">Старый пароль</label>
                        <input id="oldPass" type="password" {...register("oldpass")} />
                        <label htmlFor="newPass">Новый пароль</label>
                        <input id="newPass" type="password"{...register("newpass")} />
                    </form> */}
                    </div>
                    <div className="user__btns">
                        <button type="submit" className="user__btn">Сохранить</button>
                    </div>
                    </form>
                </div>
            </div>
        </> 
}