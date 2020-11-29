import React from 'react'
import karelia from '../images/karelia.jpg'

function ImagePopup() {
    return (
        <div className="popup popup_type_photo">
        <div className="popup__container_type_photo">
          <img src={karelia} alt="Карелия" className="popup__image_type_photo" />
          <button className="button popup__close popup__close_type_photo" type="button" />
          <h2 className="popup__title_type_photo">Карелия</h2>
        </div>
      </div>
    )
}

export default ImagePopup