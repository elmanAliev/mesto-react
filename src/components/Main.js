import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

  const [userName, setUserName] = useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = useState('#');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((userInfoObject) => { 
        setUserName(userInfoObject.name);
        setUserDescription(userInfoObject.about);
        setUserAvatar(userInfoObject.avatar);
      })
      .catch((err) => {
          console.log(`Невозможно получить информацию о пользователе ${err}`);
      });

  }, [])

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
              name = {card.name}
              link = {card.link}
              likes = {card.likes}
              key = {card._id}
           />
  })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img onClick={onEditAvatar} src={userAvatar} alt="Фото пользователя" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} className="profile__button profile__button_type_edit" type="button"></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__button profile__button_type_add" type="button"></button>
      </section>
      <section className="elements">{elements}</section>
    </main>
  )
}

export default Main;