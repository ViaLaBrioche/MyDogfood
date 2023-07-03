import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import './userInfo.scss'
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUserInfo } from "../../storageToolkit/slices/userSlice";


export const SetUserInfo = () => {
    const { user } = useSelector((s)=> s.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm({
        defaultValues: {
            name: user.name,
            email: user.email,
            avatar: user.avatar
    }})

    useEffect(()=> {
        dispatch(getUser())
    }, [dispatch])
    
    const setUserSubmit = (data) => {   
        dispatch(setUserInfo(data))
        alert('Данные успешно изменены')
        navigate("/userInfo")
        }

    return   <><Link to="/userInfo">
                    <button className="btn__back">Назад</button></Link>
            <h1>Редактирование профиля</h1>
            <div className="user__container">
                <div className="user__info">
                    <div className="user__avatar">
                        <img src={user?.avatar} alt=""/>
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