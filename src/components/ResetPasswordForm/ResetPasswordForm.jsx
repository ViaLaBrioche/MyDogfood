import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "../Modal/modal.scss"
import { ModalContext } from "../../context/Context";

export const ResetPasswordForm = () => {

        const {resetDataSubmit} = useContext(ModalContext)
        const { register, handleSubmit } = useForm({})                                      

        return  <form className="modal__form" onSubmit={handleSubmit(resetDataSubmit)}>
                <h1>Восстановление пароля</h1> 
                <span>Для получения временного пароля необходимо ввести email, указанный при регистрации.</span>
                <input name="email" placeholder="Почта" type="text" {...register("email")} />
                <span>Срок действия временного пароля 24 ч.</span>
                <button type="submit" className="button__yellow">Отправить</button>
        </form>
}