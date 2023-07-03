import React from "react";
import { useForm } from "react-hook-form";
import "../Modal/modal.scss"
import { useDispatch } from "react-redux";
import { modalIsActive } from "../../storageToolkit/slices/modalSlice";
import { Api } from "../Api/Api";

export const TokenForResetPasswordForm = () => {
        const config = {
                baseUrl: 'https://api.react-learning.ru/'
        };
        const api = new Api(config);
        const { register, handleSubmit } = useForm({})                                      
        const dispatch = useDispatch()

        const getTokenDataSubmit = (data) => {
                return  api.setPassword(data)
                .then((res)=> {
                localStorage.setItem('token', JSON.stringify(res.token))
                dispatch(modalIsActive(false))
                })
        }

        return  <form className="modal__form" onSubmit={handleSubmit(getTokenDataSubmit)}>
                <h1>Временный пароль</h1> 
                <input name="token" type="text" placeholder="Временный пароль" {...register("token", { required: "Пожалуйста, укажите временный пароль" })} />
                <input name="password" type="password" placeholder="Новый пароль" {...register("password")} />
                <span>Срок действия временного пароля 24 ч.</span>
                <button type="submit" className="button__yellow">Отправить</button>
        </form>
}