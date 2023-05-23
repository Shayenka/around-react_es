import React from "react";
import editprofile from "../images/Edit.svg";
import addcard from "../images/Signo+.svg";
import deleteCard from "../images/Papelera.svg";
import likeCard from "../images/like.svg";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatarClick}>
          <img className="profile__image" src=" " alt="Foto de Perfil" />
        </div>

        <div className="profile__info">
          <div>
            <h1 className="profile__name"></h1>
            <h2 className="profile__occupation"></h2>
          </div>
          <button className="profile__edit" onClick={onEditProfileClick}>
            <img
              className="profile__icon"
              src={editprofile}
              alt="icono de lápiz para editar perfil."
            />
          </button>
        </div>
        <button className="add-button" id="addButton" onClick={onAddPlaceClick}>
          <img
            className="add-button__icon"
            src={addcard}
            alt="Icono del signo + para añadir card."
          />
        </button>
      </section>

      <section className="elements">
        <div>
          <template id="templateCard">
            <div className="element">
              <img
                className="element__delete"
                src={deleteCard}
                alt="Icono de papelera para eliminar"
              />
              <img className="element__image" id="src" src=" " alt=" " />
              <div className="element__footer-photo">
                <h3 className="element__title"></h3>
                <div className="likes-card">
                  <img
                    className="icon-like"
                    src={likeCard}
                    alt="Icono de corazón"
                  />
                  <span className="likes-card__count">1</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>

      {/* <PopupWithForm
        name="confirmDeleteCard"
        title="¿Estás seguro?"
        submitButtonText="Sí"
      >
        {" "}
        <div></div>
      </PopupWithForm> */}

      {/* <section className="popup popup_closed" id="popupImage">
        <div className="image-show">
          <img
            className="image-show__close-icon"
            src={closePopUp}
            alt="Icono de una X para cerrar imagen."
          />
          <img className="image-show__popup" src=" " alt="" />
          <h3 className="image-show__title"></h3>
        </div>
      </section> */}
    </main>
  );
}

export default Main;
