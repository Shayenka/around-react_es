import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm.js";
import ImagePopup from "./components/ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeleteCardPopupOpen, setIsConfirmDeleteCardPopupOpen] =
    useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(cardInfo) {
    setSelectedCard(cardInfo);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          handleCardClick={handleCardClick}
        />

        {isEditProfilePopupOpen && (
          <PopupWithForm
            name="editProfile"
            title="Editar perfil"
            submitButtonText="Guardar"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <div>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                className="popup__text"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="popup__input-error" id="name-error"></span>
              <input
                type="text"
                id="about"
                placeholder="Acerca de mí"
                className="popup__text"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="popup__input-error" id="about-error"></span>
            </div>
          </PopupWithForm>
        )}
        {isEditAvatarPopupOpen && (
          <PopupWithForm
            name="changeAvatar"
            title="Actualizar foto de perfil"
            submitButtonText="Guardar"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <div>
              <input
                type="url"
                id="linkAvatar"
                name="link"
                placeholder="URL de la foto de perfil"
                className="popup__text"
                required
              />
              <span className="popup__input-error" id="linkAvatar-error"></span>
            </div>
          </PopupWithForm>
        )}
        {isAddPlacePopupOpen && (
          <PopupWithForm
            name="addCard"
            title="Nuevo lugar"
            submitButtonText="Crear"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <div>
              <input
                type="text"
                id="titulo"
                name="name"
                placeholder="Titulo"
                className="popup__text"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="popup__input-error" id="titulo-error"></span>
              <input
                type="url"
                id="enlace"
                name="link"
                placeholder="URL de la imagen"
                className="popup__text"
                required
              />
              <span className="popup__input-error" id="enlace-error"></span>
            </div>
          </PopupWithForm>
        )}
        {selectedCard !== null && (
          <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
        )}
        {isConfirmDeleteCardPopupOpen && (
          <PopupWithForm
            name="confirmDeleteCard"
            title="¿Estás seguro?"
            submitButtonText="Sí"
            isOpen={isConfirmDeleteCardPopupOpen}
            onClose={closeAllPopups}
          >
            {" "}
            <div></div>
          </PopupWithForm>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
