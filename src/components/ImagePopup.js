import React from 'react'

function ImagePopup(props) {
    if (props.card) {
    return (
        <div className={`popup popup_type_photo ${props.card && 'popup_is-opened'}`}>
        <div className="popup__container_type_photo">
          <img src={props.card.src} alt={props.card.name} className="popup__image_type_photo" />
          <button className="button popup__close popup__close_type_photo" type="button" onClick={props.onClose}/>
          <h2 className="popup__title_type_photo">{props.card.name}</h2>
        </div>
      </div>
    )}
    else {
      return null;
    }
}

export default ImagePopup