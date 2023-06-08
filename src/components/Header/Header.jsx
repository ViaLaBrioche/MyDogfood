import { ReactComponent as LogoDogo} from './LogoDogo/logoDogo.svg'
import { ReactComponent as IconHeart } from './Icons/heart.svg'
import { ReactComponent as IconDog } from './Icons/dog.svg'
import { ReactComponent as IconBasket } from './Icons/basket.svg'
import { Search } from '../Header/Search/Search.jsx'
import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CardsContext } from '../../context/Context'

export const Header = ({setSearchTerm}) => {

    const {favoritesCards, openModal} = useContext(CardsContext)
    const isAmount = favoritesCards.length;


    return <header>
                <div className="main__container">
                    <div className="header__container">
                        <Link to="/my_dogfood"><LogoDogo className="header__logo"/></Link>
                        <Search setSearchTerm={setSearchTerm}/>
                        <div className="header__icons">
                            <div className='header__heart__icon__conteiner'>
                            <Link to="/favorites">
                                <IconHeart/>
                                {!!isAmount && <div className='header__heart__favorite__amount'>{favoritesCards.length}</div>}
                            </Link>
                            </div>
                        <IconBasket/>
                        <IconDog onClick={()=> openModal()}/>
                        </div>
                    </div>
                </div>
            </header>
}