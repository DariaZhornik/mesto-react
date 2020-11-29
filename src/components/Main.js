import React from 'react'
import Jacques from '../images/Jacques.jpg'

function Main() {

    function handleEditAvatarClick() {
        document.querySelector('.popup_type_edit-photo').classList.add('popup_is-opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('popup_is-opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add').classList.add('popup_is-opened');
    }

    return(
<main className="content">
    <section className="profile">
      <div className="profile__person">
        <div className="profile__image-wrap">
          <img src={Jacques} alt="Жак-Ив Кусто" className="profile__image" onClick={handleEditAvatarClick()}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <p className="profile__subtitle">Исследователь океана</p>
          <button className="button profile__edit-btn" type="button" onClick={handleEditProfileClick()}/>
        </div>
      </div>
      <button className="button profile__add-btn" type="button" onClick={handleAddPlaceClick()}/>
    </section>
    <section className="elements">    
    </section>
  </main>
    )
}

export default Main