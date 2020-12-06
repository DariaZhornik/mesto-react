import React, { useState, useEffect } from 'react'
import { api } from '../utils/Api'
import Card from './Card'

function Main(props) {

  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getInitialCards()
      .then((result) => {
        const cards = result.map((card) => {
          return {
            id: card._id,
            src: card.link,
            name: card.name,  
            likes: card.likes
          };
        });
        setCards(cards)
      })
  }, []);

  useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
  }, []);

    return(
<main className="content">
    <section className="profile">
      <div className="profile__person">
        <div className="profile__image-wrap" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt={userName} className="profile__image" />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
          <button className="button profile__edit-btn" type="button" onClick={props.onEditProfile}/>
        </div>
      </div>
      <button className="button profile__add-btn" type="button" onClick={props.onAddPlace}/>
    </section>
    <section className="elements">  
      {cards.map((card) => {
        return <Card key={card.id} card={card} onCardClick={props.onCardClick} /> 
      })
      }    
    </section>
  </main>
    )
}

export default Main