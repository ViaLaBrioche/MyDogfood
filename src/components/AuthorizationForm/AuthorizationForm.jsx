import React from "react";
import { useForm } from "react-hook-form";
import "../Modal/modal.scss"
import { useDispatch} from "react-redux";
import { modalIsActive, setIsForm } from "../../storageToolkit/slices/modalSlice";
import { Api } from "../Api/Api";
import { setIsAuthorized } from "../../storageToolkit/slices/userSlice";

export const AuthorizationForm = () => {

    const config = {
        baseUrl: 'https://api.react-learning.ru/'
    };

    const api = new Api(config);
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: {errors} } = useForm({}) 

    const authDataSubmit = (data) => {
        return  api.authorizationUser(data)
        .then((res)=> {
        alert('Вход в личный кабинет выполнен')
        localStorage.setItem('token', JSON.stringify(res.token))
        dispatch(setIsAuthorized(true))
        dispatch(modalIsActive(false))
        })
        .catch((res) => {
        alert("Неверный логин или пароль")
        })
    }
                                

    return  <form className="modal__form" onSubmit={handleSubmit(authDataSubmit)}>
                <h1>Вход</h1> 
                <div className="form__input">
                    <input name="email" placeholder="Почта" type="text" {...register("email", { required: "Введите почту" })} />
                    {errors?.email && <span className="errors">{errors.email.message}</span>}
                    <input name="password" placeholder="Пароль" type="password" {...register("password", { required: "Введите пароль" })} />
                    {errors?.password && <span className="errors">{errors.password.message}</span>}
                    <span className="form__reset__btn" onClick={()=> dispatch(setIsForm('resetPassword'))}>Восстановить пароль</span>
                </div>
                <div className="form__container__btns">
                    <button type="submit" className="button__yellow">Войти</button>
                    <button type="button" onClick={()=> dispatch(setIsForm('registration'))} className="button__white">Регистрация</button>
                </div>
        </form>
}