import React from 'react'

function App() {
  return (
    <>
  <div className="popup popup_type_edit">
    <div className="popup__container">
      <button className="button popup__close" type="button" />
      <form className="popup__content popup__content_edit form" name="edit" noValidate>
        <h2 className="popup__title">Редактировать профиль</h2>
        <input name="name" type="text" required className="popup__input popup__text_name" id="person-name" minLength={2} maxLength={40} />
        <span className="popup__error" id="person-name-error" />
        <input name="about" type="text" required className="popup__input popup__text_job" id="person-job" minLength={2} maxLength={200} />
        <span className="popup__error" id="person-job-error" />
        <button className="popup__save button" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="popup popup_type_add">
    <div className="popup__container">
      <button className="button popup__close" type="button" />
      <form className="popup__content popup__content_add form" name="add" noValidate> 
        <h2 className="popup__title">Новое место</h2>
        <input name="place-name" type="text" required placeholder="Название" className="popup__input popup__text_title" id="place-name" minLength={2} maxLength={30} />
        <span className="popup__error" id="place-name-error" />
        <input name="place-link" type="url" required placeholder="Ссылка на картинку" className="popup__input popup__text_link" id="place-link" />
        <span className="popup__error" id="place-link-error" />
        <button className="popup__save popup__submit button" type="submit">Создать</button>
      </form>
    </div>
  </div>
  <div className="popup popup_type_edit-photo">
    <div className="popup__container">
      <button className="button popup__close" type="button" />
      <form className="popup__content popup__content_avatar form" name="add" noValidate> 
        <h2 className="popup__title">Обновить аватар</h2>
        <input name="avatar" type="url" required placeholder="Ссылка на фотографию" className="popup__input popup__text_link" id="place-link" />
        <span className="popup__error" id="place-link-error" />
        <button className="popup__save popup__submit button" type="submit">Сохранить</button>
      </form>
    </div>
  </div>
  <div className="popup popup_type_delete">
    <div className="popup__container popup__container_type_delete">
      <button className="button popup__close" type="button" />
      <form className="popup__content popup__content_delete form" name="add" noValidate> 
        <h2 className="popup__title popup__title_type_delete">Вы уверены?</h2>
        <button className="popup__save popup__delete popup__submit button" type="submit">Да</button>
      </form>
    </div>
  </div>
  <template className="element-template" />
  </>
  );
}

export default App;
