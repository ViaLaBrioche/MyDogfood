import './App.css';
import { useEffect, useState } from 'react';
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

function App() {

  const config = {
    baseUrl: 'https://api.react-learning.ru/'
  };

  const api = new Api(config);
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [user, setUser] = useState({});
  const [favoritesCards, setFavoritesCards] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false) 
  const [isForm, setIsForm] = useState()
  const [openTextarea, setOpenTextarea] = useState(false)
  const [reviews, setReviews] = useState([])

  const navigate = useNavigate()

  const setUserSubmit = (data) => {
    api.setUserInfo(data) 
    .then(()=> alert('Данные успешно изменены'))
    .then(()=> {
      navigate("/userInfo")
      window.location.reload()})
  }


  const logout = () => {
    localStorage.clear()
    navigate("/my_dogfood")
    setIsAuthorized(false)
    window.location.reload();
  }

  const openModal = () => {
    if (!isAuthorized) {
      setIsForm(<AuthorizationForm/>)
      setModalIsOpen(true)}
    else {navigate("/userInfo")}
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  const addReviewsSubmit = (data) => {
    return api.addReview(data)
    .then(()=> {
      alert("Благодарим за отзыв!")
      updateReviews(data.id)
      setOpenTextarea(false)
    })
  }


  const updateReviews = (idProduct) => {
    api.getAllReviewsById(idProduct)
    .then((res) => 
      setReviews(res))
      return
    }

  const deleteReview = (idRew, idProduct)=> {
    return api.deleteReview(idRew, idProduct)
    .then(() => {
      alert("Отзыв удалён")
      updateReviews(idProduct)
      })
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

  const filterfavorites = (cards, id) => {
    const newCards = cards.filter((e) => e.likes.includes(id))
    return newCards      
}
  
    
const toggleLike = (id, like) => api.toggleLike(id, like)
  .then(toggleCard => {
      const updateCard = () => {
        const newCards = cards.map((e) => e._id === toggleCard._id ? toggleCard : e)
        setCards(newCards)
        setFavoritesCards(filterfavorites(newCards, user._id))    
    } 
        updateCard()    
    return
  })
  .catch(err=> {
      return alert(err)
  });



  useEffect(() => {
    
    const Debounce = setTimeout(() => {
      !!isAuthorized &&
      Promise.all([api.getAllItems(), api.getUserInfo()])
      .then(([cardsData, userData]) => {
        const cards = cardsData.products.filter(item => 
          item.author['_id'] === '645871a2e0bf2c519b9ccfbe')
          setCards(filterCards(searchTerm, cards))
          setUser(userData) 
          setFavoritesCards(filterfavorites(cards, userData._id))
        return
      })
      .catch((error) => {
          console.log(error)
      });
      }, 300);
    return () => clearTimeout(Debounce)
},[searchTerm, isAuthorized]);



  useEffect(() => {
    const Debounce = setTimeout(() => {
    !isAuthorized &&
    api.getAllItems()
    .then((cardsData) => {
      const cards = cardsData.products.filter(item => 
        item.author['_id'] === '645871a2e0bf2c519b9ccfbe')
      setCards(filterCards(searchTerm, cards))
      setFavoritesCards(filterfavorites(cards))
      return
      })
    }, 300);
    return () => clearTimeout(Debounce)
},[searchTerm, isAuthorized])


  useEffect(()=>{
    if(localStorage.getItem('token')) {
      setIsAuthorized(true)
    }
  },[])



  const contextUser = {
    setReviews,
    updateReviews,
    deleteReview,
    addReviewsSubmit,
    setOpenTextarea,
    setUserSubmit,
    toggleLike,
    logout,
    reviews,
    user,
    openTextarea,
  }

  const contextCards= {
    getTokenDataSubmit,
    setCards,
    openModal,
    setSearchTerm,
    searchTerm,
    favoritesCards,
    cards,
  }

  const contextModal = {
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
