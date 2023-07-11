import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as LogoDogoMini} from './LogoDogo/logoDogoMini.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { ReactComponent as IconArrow } from './Icons/arrow.svg'
import { Search } from '../Search/Search.jsx'
import React from 'react'
import './header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { modalIsActive, setIsForm } from '../../storageToolkit/slices/modalSlice'
import { setIsHome } from '../../storageToolkit/slices/userSlice'
import { useEffect } from 'react'

export const Header = () => {

    const { favoritesCards, basketCards } = useSelector((s) => s.products)
    const { isAuthorized, isHome } = useSelector((s) => s.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openModal = () => {
        if (!isAuthorized) {
            dispatch(modalIsActive(true))
            dispatch(setIsForm('authorization'))
        }
        else {navigate("/userInfo")}
    }       
    const watcher = () => {
        const currentUrl = window.location.href
        const toggle = currentUrl.includes('/homepage')
        dispatch(setIsHome(toggle))
    }

    useEffect(()=> {
        watcher()
    },[dispatch, window.location.href])

    const isAmount = favoritesCards.length;
    const amountBasket = basketCards.length;
    return <header>
                <div className={isHome ? "home__header" : "main__container"}>
                    <div className="header__container">
                        <Link to='/MyDogfood/homepage'><LogoDogoMini className="header__logo_mini"/><LogoDogo className="header__logo"/></Link>
                        <Search />
                        <div className="header__icons">
                            <div className='header__icon__container'>
                            <Link to="/favorites">
                                <IconHeart/>
                                {!!isAmount && <div className='header__bubble__amount'>{isAmount}</div>}
                            </Link>
                            </div>
                            <div className='header__icon__container'>
                            <Link to="/basket">
                                <IconBasket className="header__icon__basket" />
                            {!!amountBasket && <div className='header__bubble__amount'>{amountBasket}</div>}
                            </Link>
                            </div>
                        <IconDog className="header__icon__auth" onClick={()=> openModal()}/>
                        </div>
                    </div>
                </div>
                {isHome && <div className="home__up">
                        <div className="main__container">
                            <div className='home__up__container'>
                                <h1>Крафтовые 
                                    <br/>
                                    лакомства для 
                                    <br/>
                                    собак</h1>
                                <h2>Всегда свежие лакомства ручной 
                                    <br/> 
                                    работы с доставкой по России и Миру</h2>
                                <Link className="link__header" to="/my_dogfood"><button>В каталог <IconArrow/></button></Link>
                            </div>
                                
                        </div>
                    </div>}
            </header>
}