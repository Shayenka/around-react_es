import deleteCard from "../images/Papelera.svg";
import likeCard from "../images/like.svg";
import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Verificando si el usuario actual es el propietario de la tarjeta actual
  const isOwn = card.owner._id === currentUser._id;

  // Creando una variable que después establecerás en `className` para el botón eliminar
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  // Verifica si el usuario actual le dio "like" a la tarjeta
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Crea una variable que después establecerás en `className` para el botón like

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "icon-like_black" : ""
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <div className="element" key={card._id}>
      <img
        className="card__delete-button"
        src={deleteCard}
        alt="Icono de papelera para eliminar"
        onClick={handleDeleteClick}
      />
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      />
      <div className="element__footer-photo">
        <h3 className="element__title">{card.name}</h3>
        <div className="likes-card">
          <img
            className="icon-like"
            src={likeCard}
            alt="Icono de corazón"
            onClick={handleLikeClick}
          />
          <span className="likes-card__count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
