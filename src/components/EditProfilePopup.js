import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import ImagePopup from "./ImagePopup.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(evt) {
    // Evita que el navegador navegue hacia la dirección del formulario
    evt.preventDefault();

    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }
  return (
    <PopupWithForm
      name="editProfile"
      title="Editar perfil"
      submitButtonText="Guardar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name || ""}
          onChange={handleNameChange}
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
          value={description || ""}
          onChange={handleDescriptionChange}
        />
        <span className="popup__input-error" id="about-error"></span>
      </div>
    </PopupWithForm>
  );
}
{
  //   <PopupWithForm
  //     name="changeAvatar"
  //     title="Actualizar foto de perfil"
  //     submitButtonText="Guardar"
  //     isOpen={isOpen}
  //     onClose={onClose}
  //   >
  //     <div>
  //       <input
  //         type="url"
  //         id="linkAvatar"
  //         name="link"
  //         placeholder="URL de la foto de perfil"
  //         className="popup__text"
  //         required
  //       />
  //       <span className="popup__input-error" id="linkAvatar-error"></span>
  //     </div>
  //   </PopupWithForm>;
}
{
  //   <PopupWithForm
  //     name="addCard"
  //     title="Nuevo lugar"
  //     submitButtonText="Crear"
  //     isOpen={isAddPlacePopupOpen}
  //     onClose={closeAllPopups}
  //   >
  //     <div>
  //       <input
  //         type="text"
  //         id="titulo"
  //         name="name"
  //         placeholder="Titulo"
  //         className="popup__text"
  //         required
  //         minLength="2"
  //         maxLength="30"
  //       />
  //       <span className="popup__input-error" id="titulo-error"></span>
  //       <input
  //         type="url"
  //         id="enlace"
  //         name="link"
  //         placeholder="URL de la imagen"
  //         className="popup__text"
  //         required
  //       />
  //       <span className="popup__input-error" id="enlace-error"></span>
  //     </div>
  //   </PopupWithForm>;
}
{
  //   selectedCard && (
  //     <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
  //   );
}
{
  //   isConfirmDeleteCardPopupOpen && (
  //     <PopupWithForm
  //       name="confirmDeleteCard"
  //       title="¿Estás seguro?"
  //       submitButtonText="Sí"
  //       isOpen={isConfirmDeleteCardPopupOpen}
  //       onClose={closeAllPopups}
  //     >
  //       {" "}
  //       <div></div>
  //     </PopupWithForm>
  //   );
}

export default EditProfilePopup;
