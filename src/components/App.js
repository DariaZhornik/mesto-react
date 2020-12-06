import React, {useState} from 'react'
import PopupWithForm from './PopupWithForm'
import Main from './Main'
import ImagePopup from './ImagePopup'

function App() {
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true) 
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true) 
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true) 
  }

  function closeAllPopups() {
    setisAddPlacePopupOpen(false) 
    setIsEditProfilePopupOpen(false) 
    setIsEditAvatarPopupOpen(false) 
    setSelectedCard()
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState()

  return (
    <>
  <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
  <PopupWithForm title="Редактировать профиль" name="edit" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <div>
        <input name="name" type="text" required placeholder="Имя" className="popup__input popup__text_name" id="person-name" minLength={2} maxLength={40} />
        <span className="popup__error" id="person-name-error" />
        <input name="about" type="text" required placeholder="Занятие" className="popup__input popup__text_job" id="person-job" minLength={2} maxLength={200} />
        <span className="popup__error" id="person-job-error" />
      </div>
  </PopupWithForm>
  <PopupWithForm title="Новое место" name="add" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
    <div>
    <input name="place-name" type="text" required placeholder="Название" className="popup__input popup__text_title" id="place-name" minLength={2} maxLength={30} />
        <span className="popup__error" id="place-name-error" />
        <input name="place-link" type="url" required placeholder="Ссылка на картинку" className="popup__input popup__text_link" id="place-link" />
        <span className="popup__error" id="place-link-error" />
    </div>
  </PopupWithForm>
  <PopupWithForm title="Обновить аватар" name="edit-photo" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}> 
    <div>
      <input name="avatar" type="url" required placeholder="Ссылка на фотографию" className="popup__input popup__text_link" id="place-link" />
        <span className="popup__error" id="place-link-error" />
    </div>
  </PopupWithForm>
  {/* <PopupWithForm title="Вы уверены?" name="delete" button="Да" isOpen="false">
  </PopupWithForm> */}
  <ImagePopup name="photo" card={selectedCard} onClose={closeAllPopups} >
  </ImagePopup>
  <template className="element-template" />
  </>
  );
}

export default App;
