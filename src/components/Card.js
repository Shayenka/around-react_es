import React, { useContext } from "react";
import deleteCard from "../images/Papelera.svg";
import likeCard from "../images/like.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  // Verificando si el usuario actual es el propietario de la tarjeta actual
  const isOwn = props.owner._id === currentUser._id;
  console.log(isOwn);

  // Creando una variable que después establecerás en `className` para el botón eliminar
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete " : ""
  }`;

  // Verifica si el usuario actual le dio "like" a la tarjeta
  const isLiked = props.likes.some((item) => item._id === currentUser._id);

  // Crea una variable que después establecerás en `className` para el botón like

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "icon-like_black" : ""
  }`;

  function handleClick() {
    props.onCardClick(props);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  return (
    <div className="element" key={props.card._id}>
      <img
        className={cardDeleteButtonClassName}
        src={deleteCard}
        alt="Icono de papelera para eliminar"
        onClick={handleDeleteClick}
      />
      <img
        className="element__image"
        src={props.link}
        alt={props.name}
        style={{ backgroundImage: `url(${props.link})` }}
        onClick={handleClick}
      />
      <div className="element__footer-photo">
        <h3 className="element__title">{props.name}</h3>
        <div className="likes-card">
          <img
            className={cardLikeButtonClassName}
            src={likeCard}
            alt="Icono de corazón"
            onClick={handleLikeClick}
          />
          <span className="likes-card__count">{props.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
