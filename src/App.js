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
import { UserInfo } from './components/UserInfo/UserInfo';
import { useNavigate } from 'react-router-dom';


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
  const navUserPage = useNavigate()

  const openModal = () => {
    if (!isAuthorized) {
      setIsForm(<AuthorizationForm/>)
      setModalIsOpen(true)}
    else {navUserPage("/userInfo")}
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const authDataSubmit = (data) => {
    console.log(data)
    return  api.authorizationUser(data)
    .then((res)=> {
      setIsAuthorized(true)
      localStorage.setItem('token', JSON.stringify(res.token))
      closeModal()
    })
}

  const regDataSubmit = (data) => {
    console.log(data)
    return api.registrationUser(data)

    .then((res)=> {
      console.log(res)
      closeModal()
    })
  }

  const resetDataSubmit = (data) => {
    console.log(data, 'reset')
    return api.resetPassword(data)

    .then((res)=> {
      console.log(res)
      closeModal()
    })
    .catch((res)=>{
      console.log(res, 'ERR')
    })
  }
  
  const  filterCards = (searchText, cards) => {
  if (!searchText) {
    return cards;
  }
    return cards.filter(({name}) => 
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
  .catch(res=> {
      return console.log(res, 'что-то сломалось')
  });

  useEffect(() => {
  api.getAllItems()
  .then((cardsData) => {
    const cards = cardsData.products.filter(item => 
      item.author['_id'] === '645871a2e0bf2c519b9ccfbe')
    setCards(filterCards(searchTerm, cards))
    })
},[])


  useEffect(() => {
    const Debounce = setTimeout(() => {


  Promise.all([api.getAllItems(), api.getUserInfo()])
    .then(([cardsData, userData]) => {
      const cards = cardsData.products.filter(item => 
        item.author['_id'] === '645871a2e0bf2c519b9ccfbe')
      setUser(userData)
      setCards(filterCards(searchTerm, cards))
      setFavoritesCards(filterfavorites(cards, userData._id))
      return
    })
    .catch((error) => {
        console.log(error)
    });
    }, 300);
  return () => clearTimeout(Debounce)

},[searchTerm, isAuthorized]);
  
  useEffect(()=>{
    if(localStorage.getItem('token')) {
      setIsAuthorized(true)
    }
  },[])

  const contextUser = {
    user,
    toggleLike,
  }

  const contextCards= {
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
        <div className='main__container'>
            <Routes>
              <Route path="/my_dogfood" element={<CatalogPage/>} />
              <Route path="/product/:id" element={<ProductPage/>} />
              <Route path="/favorites" element={<FavoritesProductPage />}/>
              <Route path="/userInfo" element={<UserInfo/>}/>
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
