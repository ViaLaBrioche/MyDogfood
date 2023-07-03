import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setIsForm } from "../../storageToolkit/slices/modalSlice";
import { Api } from "../Api/Api";
import "../Modal/modal.scss"


export const ResetPasswordForm = () => {

        const { register, handleSubmit } = useForm({})
        const config = {
                baseUrl: 'https://api.react-learning.ru/'
        };
        const dispatch = useDispatch()
        const api = new Api(config);
        
        const resetDataSubmit = (data) => {
        return api.resetPassword(data)
        .then(()=> {
                alert("Пароль отправлен вам на почту!")
                dispatch(setIsForm('tokenForResetPassword'))
        })
        .catch((res)=>{
                console.log(res, 'ERROR')
        })
        }

        return  <form className="modal__form" onSubmit={handleSubmit(resetDataSubmit)}>
                <h1>Восстановление пароля</h1> 
                <span>Для получения временного пароля необходимо ввести email, указанный при регистрации.</span>
                <input name="email" placeholder="Почта" type="text" {...register("email")} />
                <span>Срок действия временного пароля 24 ч.</span>
                <button type="submit" className="button__yellow">Отправить</button>
        </form>

}