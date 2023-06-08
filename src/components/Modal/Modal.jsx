import React, { useContext } from 'react';
import './modal.scss'
import { ModalContext } from '../../context/Context';



export const Modal = ({form})=> {

    const {closeModal, modalIsOpen} = useContext(ModalContext)

    return <div className={`modal__container ${!!modalIsOpen ? "modal__active" : null}`}>
            <div className="modal__btn__close" onClick={()=> closeModal()}>X</div>
        {form}
    </div>
}