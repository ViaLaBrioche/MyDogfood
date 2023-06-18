import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "../Modal/modal.scss"
import { ModalContext } from "../../context/Context";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm"
import { ResetPasswordForm } from "../ResetPasswordForm/ResetPasswordForm";

export const AuthorizationForm = () => {

    const {authDataSubmit, setIsForm} = useContext(ModalContext)
    const { register, handleSubmit, formState: {errors} } = useForm({})                                      

    return  <form className="modal__form" onSubmit={handleSubmit(authDataSubmit)}>
                <h1>Вход</h1> 
                <div className="form__input">
                    <input name="email" placeholder="Почта" type="text" {...register("email", { required: "Введите почту" })} />
                    {errors?.email && <span className="errors">{errors.email.message}</span>}
                    <input name="password" placeholder="Пароль" type="password" {...register("password", { required: "Введите пароль" })} />
                    {errors?.password && <span className="errors">{errors.password.message}</span>}
                    <span className="form__reset__btn" onClick={()=> setIsForm(<ResetPasswordForm/>)}>Восстановить пароль</span>
                </div>
                <div className="form__container__btns">
                    <button type="submit" className="button__yellow">Войти</button>
                    <button type="button" onClick={()=>setIsForm(<RegistrationForm/>)} className="button__white">Регистрация</button>
                </div>
        </form>
}