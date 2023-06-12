import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
import './userInfo.scss'


export const UserInfo = () => {
    const {user} = useContext(UserContext)

    return <div className="user__info__container">
                <div className="user__avatar">
                    <img src={user.avatar} alt=""/>
                </div>
                <div className="user__info">
                    <div>{user.name}</div>
                    <p>{user.email}</p>
                </div>
                
        </div>

}