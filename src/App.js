import './App.css';
import { useMemo, useCallback, useEffect, useState } from 'react';
import React from 'react';
import { Header } from './components/Header/Header';
import './components/CardList/main.css'
import { Footer }  from './components/Footer/Footer'
import { Api } from './components/Api/Api';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { NotFound } from './pages/NotFoundPage/NotFound'
import './pages/NotFoundPage/notFound.css'
import { FavoritesProductPage } from './pages/FavoritesProductPage/FavoritesProductPage';
import { ModalContext, UserContext } from './context/Context';
import { CardsContext } from './context/Context';
import { Modal } from './components/Modal/Modal';
import { AuthorizationForm } from './components/AuthorizationForm/AuthorizationForm'
import { useNavigate } from 'react-router-dom';
import { UserInfoPage } from './pages/UserPage/UserInfoPage';
import { SetUserInfo } from './components/UserInfo/SetUserInfo';
import { TokenForResetPasswordForm } from './components/ResetPasswordForm/TokenForResetPasswordForm';
import { FaqPage } from './pages/FaqPage/FaqPage';
import { BasketPage } from './pages/BasketPage/BasketPage';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './storageToolkit/slices/userSlice';
import { getAllProducts } from './storageToolkit/slices/productsSlice';

function App() {
  
  const config = {
    baseUrl: 'https://api.react-learning.ru/'
  };
  const dispatch = useDispatch()
  const api = new Api(config);
  const { cards } = useSelector((s)=> s.products)
  const [searchTerm, setSearchTerm] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false) 
  const [isForm, setIsForm] = useState()
  const [openTextarea, setOpenTextarea] = useState(false)
  const [reviews, setReviews] = useState([])
  const [basketCards, setBasketCards] = useState([])


  const navigate = useNavigate()
  
  const logout = () => {
    
    localStorage.clear()
    navigate("/my_dogfood")
    setIsAuthorized(false)
    window.location.reload();
    return 
    
  }

  const openModal = useCallback(() => {

    if (!isAuthorized) {
      setIsForm(<AuthorizationForm/>)
      setModalIsOpen(true)
    }
    else {navigate("/userInfo")}
    },[isAuthorized, navigate])
  

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  const addReviewsSubmit = useCallback((data) => {
    return api.addReview(data)
    .then(()=> {
      alert("Благодарим за отзыв!")
      updateReviews(data.id)
      setOpenTextarea(false)
      
    })
    .catch(() => {
      return alert('Требуется авторизация')
    })
  },[reviews])


  const deleteReview = (idRew, idProduct)=> {
    return api.deleteReview(idRew, idProduct)
    .then(() => {
      alert("Отзыв удалён")
      updateReviews(idProduct)
      })
    .catch(()=> alert("Требуется авторизация"))
  }
  
  const updateReviews = (idProduct) => {
    api.getAllReviewsById(idProduct)
    .then((res) => 
      setReviews(res))
      return
    }


  const getTokenDataSubmit = (data) => {
      return  api.setPassword(data)
      .then((res)=> {
        localStorage.setItem('token', JSON.stringify(res.token))
        closeModal()
      })
  }

  const authDataSubmit = (data) => {
    return  api.authorizationUser(data)
    .then((res)=> {
      alert('Вход в личный кабинет выполнен')
      setIsAuthorized(true)
      localStorage.setItem('token', JSON.stringify(res.token))
      closeModal()
    })
    .catch((res) => {
      alert("Неверный логин или пароль")
    })
}

  const regDataSubmit = (data) => {
    return api.registrationUser(data)

    .then((res)=> {
      alert("Вы зарегистрировались!")
      closeModal()
    })
  }

  const resetDataSubmit = (data) => {
    return api.resetPassword(data)

    .then(()=> {
      alert("Пароль отправлен вам на почту!")
      setIsForm(<TokenForResetPasswordForm/>)
    })
    .catch((res)=>{
      console.log(res, 'ERROR')
    })
  }
  
  const  filterCards = (searchText, cards) => {
  if (!searchText) {
    return cards;
  }
  return   cards.filter(({name}) => 
      name.toLowerCase().includes(searchText.toLowerCase())      
  )
};

  const addToBasket = (id) => api.getProductById(id)
  .then(card => {
    const newCards = cards.filter((e) => e._id.includes(card._id))
    const oldCards = basketCards.filter((e) => e._id.includes(card._id))
      if (!!oldCards.length) {
        alert('Товар уже в корзине')
      } else {setBasketCards([...newCards, ...basketCards])}
    return
  })
  


  useEffect(() => {
    if (!isAuthorized) return;
    dispatch(getUser())
      .then(() => dispatch(getAllProducts()))
  }, [dispatch, isAuthorized])


  useEffect(()=>{
    if(localStorage.getItem('token')) {
      setIsAuthorized(true)
    }
  },[])



  const contextUser = {
    addToBasket,
    setReviews,
    updateReviews,
    deleteReview,
    addReviewsSubmit,
    setOpenTextarea,
    logout,
    basketCards,
    reviews,
    openTextarea,
  }

  const contextCards= {
    getTokenDataSubmit,
    openModal,
    setSearchTerm,
    searchTerm,
  }

  const contextModal = {
    useMemo,
    setIsForm,
    openModal,
    closeModal,
    getTokenDataSubmit,
    authDataSubmit,
    regDataSubmit,
    resetDataSubmit,
    modalIsOpen,
    isForm,
    isAuthorized,
  }

  return (
  <ModalContext.Provider value={contextModal}>  
    <CardsContext.Provider value={contextCards}>
      <UserContext.Provider value={contextUser}>
        <div className="App">
          <Header/>
        <div className='main__container content'>
            <Routes>
              <Route path="/my_dogfood" element={<CatalogPage/>} />
              <Route path="/product/:id" element={<ProductPage/>} />
              <Route path="/favorites" element={<FavoritesProductPage />}/>
              <Route path="/userInfo" element={<UserInfoPage/>}/>
              <Route path="/faq" element={<FaqPage/>}/>
              <Route path="/setuserinfo" element={<SetUserInfo/>}/>
              <Route path="/basket" element={<BasketPage/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Modal/>
        </div>
        <Footer/>
        </div>
      </UserContext.Provider>
    </CardsContext.Provider>
  </ModalContext.Provider> 
    );
}

export default App;
