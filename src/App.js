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


  const openModal = () => {
    setModalIsOpen(true);
    console.log(modalIsOpen, 'ya')
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };



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
    const Debounce = setTimeout(() => {

  Promise.all([api.getAllItems(), api.getUserInfo()])
    .then(([cardsData, userData]) => {
      const cards = cardsData.products.filter(item => 
        item.author['_id'] === '645871a2e0bf2c519b9ccfbe')
      setUser(userData)
      setCards(filterCards(searchTerm, cards))
      setFavoritesCards(filterfavorites(cards, userData._id)
      )
      return
    })
    .catch((error) => {
        console.log(error)
    });
    }, 300);

  return () => clearTimeout(Debounce)

},[searchTerm]);

  const contextUser = {
    user: user,
    toggleLike,
  }

  const contextCards= {
    openModal,
    favoritesCards: favoritesCards,
    cards: cards,
    searchTerm: searchTerm,
  }

  const contextModal = {
    closeModal,
    modalIsOpen,
  }

  return (
  <ModalContext.Provider value={contextModal}>  
    <CardsContext.Provider value={contextCards}>
      <UserContext.Provider value={contextUser}>
        <div className="App">
          <Header favoritesCards={favoritesCards} setSearchTerm={setSearchTerm}/>
        <div className='main__container'>
            <Routes>
              <Route path="/my_dogfood" element={<CatalogPage setCards={setCards}/>} />
              <Route path="/product/:id" element={<ProductPage/>} />
              <Route path="/favorites" element={<FavoritesProductPage />}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
        <Footer/>
        </div>
      </UserContext.Provider>
    </CardsContext.Provider>
  </ModalContext.Provider> 
    );
}

export default App;
