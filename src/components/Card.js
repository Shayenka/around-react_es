import deleteCard from "../images/Papelera.svg";
import likeCard from "../images/like.svg";

function Card({ card }) {
  return (
    <div className="element" key={card._id}>
      <img
        className="element__delete"
        src={deleteCard}
        alt="Icono de papelera para eliminar"
      />
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        style={{ backgroundImage: `url(${card.link})` }}
      />
      <div className="element__footer-photo">
        <h3 className="element__title">{card.name}</h3>
        <div className="likes-card">
          <img className="icon-like" src={likeCard} alt="Icono de corazón" />
          <span className="likes-card__count">{card.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
