import React from 'react'

function PopupWithForm(props) {
    return(
        <div className={props.isOpen ? `popup popup_type_${props.name} popup_is-opened` : `popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button className="button popup__close" type="button" onClick={props.onClose}/>
          <form className={`popup__content popup__content_${props.name} form`} name={`${props.name}`} noValidate>
            <h2 className="popup__title">{props.title}</h2>
            <div>{props.children}</div>
            <button className="popup__save button" type="submit">{props.button}</button>
          </form>
        </div>
        </div>
    )
}

export default PopupWithForm