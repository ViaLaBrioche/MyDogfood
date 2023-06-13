import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "../Modal/modal.scss"
import { ModalContext } from "../../context/Context";

export const TokenForResetPasswordForm = () => {

        const { getTokenDataSubmit } = useContext(ModalContext)
        const { register, handleSubmit } = useForm({})                                      

        return  <form className="modal__form" onSubmit={handleSubmit(getTokenDataSubmit)}>
                <h1>Временный пароль</h1> 
                <input name="token" type="text" placeholder="Временный пароль" {...register("token", { required: "Пожалуйста, укажите временный пароль" })} />
                <input name="password" type="password" placeholder="Новый пароль" {...register("password")} />
                <span>Срок действия временного пароля 24 ч.</span>
                <button type="submit" className="button__yellow">Отправить</button>
        </form>
}