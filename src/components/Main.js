import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({ onCardClick, onEditProfile, onAddPlace, onEditAvatar }) {

  const userInfo = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getInitialCards()
      .then((cardsArray) => {
        setCards(cardsArray);
      })
      .catch((err) => {
          console.log(`Невозможно отобразить карточки с сервера ${err}`);
      })
  }, [])

  const elements = cards.map((card) => {
    return <Card
              onCardClick = {onCardClick}
              onCardLike = {handleCardLike}
              onCardDelete = {handleCardDelete}
              card = {card}
              key = {card._id}
           />
  });

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === userInfo._id);
    
    isLiked 
      ? api.deleteLikeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
      : api.putLikeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
  } 

  function handleCardDelete (card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })

  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img onClick={onEditAvatar} src={userInfo.avatar} alt="Фото пользователя" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userInfo.name}</h1>
            <button onClick={onEditProfile} className="profile__button profile__button_type_edit" type="button"></button>
          </div>
          <p className="profile__job">{userInfo.about}</p>
        </div>
        <button onClick={onAddPlace} className="profile__button profile__button_type_add" type="button"></button>
      </section>
      <section className="elements">{elements}</section>
    </main>
  )
}

export default Main;