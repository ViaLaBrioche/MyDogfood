import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "../Modal/modal.scss"
import { ModalContext } from "../../context/Context";

export const RegistrationForm = () => {

        const {regDataSubmit, openModal} = useContext(ModalContext)
        const { register, handleSubmit, formState: {errors} } = useForm() 
        
        const emailRegister = {
                required: {
                        value: true,
                        message: "Пожалуйста, укажите почту",
                },
        }

        const passwordRegister = {
                required: {
                        value: true,
                        message: "Пожалуйста, придумайте пароль"
                },
                minLength: {value: 8, message: "Пароль должен содержать минимум 8 символов" },
                maxLength: {value: 20, message: "Пароль должен содержать максимум 20 символов" }
        }

        return  <form className="modal__form" onSubmit={handleSubmit(regDataSubmit)}>
                <h1>Регистрация</h1> 
                <div className="form__input">
                        <input name="email" placeholder="Почта" type="text" {...register("email", emailRegister)} />
                        {errors?.email && <span className="errors">{errors.email.message}</span>}
                        <input name="password" placeholder="Пароль" type="password" {...register("password", passwordRegister)} />
                        {errors?.password && <span className="errors">{errors.password.message}</span>}
                        <span className="registration__info">Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</span>
                </div>
                <div className="form__container__btns">
                        <button type="submit" className="button__yellow">Зарегистрироваться</button>
                        <button type="button" className="button__white" onClick={()=> openModal()}>Войти</button>
                </div> 
        </form>
}