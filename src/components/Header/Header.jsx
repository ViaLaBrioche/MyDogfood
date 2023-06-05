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

    const {favoritesCards} = useContext(CardsContext)

    function AmountSearch({favoritesCards}) {
        const isAmount = favoritesCards.length;
        if (!!isAmount) {
            return  <div className='header__heart__favorite__amount'>{favoritesCards.length}</div>
        } else {
            return null
        }
    }

    return <header>
                <div className="main__container">
                    <div className="header__container">
                        <Link to="/my_dogfood"><LogoDogo className="header__logo"/></Link>
                        <Search setSearchTerm={setSearchTerm}/>
                        <div className="header__icons">
                            <div className='header__heart__icon__conteiner'>
                            <Link to="/favorites">
                                <IconHeart/>
                                <AmountSearch favoritesCards={favoritesCards}/>
                            </Link>
                            </div>
                        <IconBasket/>
                        <IconDog/>
                        </div>
                    </div>
                </div>
            </header>
}