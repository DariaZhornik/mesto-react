function Card (props) {
    
    function handleClick() {
        props.onCardClick(props.card);
      }  

    if (props.card) {
    return (
    <div className="element">
      <img src={props.card.src} alt={props.card.name} className="element__image" onClick={handleClick}/>
      <button className="button element__delete" type="button"></button>
      <div className="element__text">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="button element__like" type="button"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
    )}
    else {
        return null
    }
}

export default Card