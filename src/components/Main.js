import React from 'react';

function Main() {
    
    return (
        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <img src="#" alt="Фото пользователя" className="profile__image"/>
            </div>
            <div className="profile__info">
              <div className="profile__container">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__button profile__button_type_edit" type="button"></button>
              </div>
              <p className="profile__job">Исследователь океана</p>
            </div>
            <button className="profile__button profile__button_type_add" type="button"></button>
          </section>      
          <section className="elements">
          </section>
        </main>
    )
}

export default Main;