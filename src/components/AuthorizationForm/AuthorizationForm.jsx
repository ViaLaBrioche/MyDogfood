import React from "react";
import { Form } from "react-router-dom";

export const AuthorizationForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    return  <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Регистрация</h1> 
                

        </form>




}