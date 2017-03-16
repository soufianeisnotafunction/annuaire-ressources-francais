import React from "react";

const Form = () => (
  <div className="container mt-4 ">
    <div className="row justify-content-center ">
      <form action="/api/ress" method="post" className="form-signin col-10 col-sm-8 col-md-6 col-lg-4 ">
        <h2 className="form-signin-heading mb-4 text-center">
          Add Ressources
        </h2>
        <label for="inputImg" className="sr-only">Img</label>
        <input
          name="img"
          type="text"
          id="inputPhoto"
          className="form-control mb-4"
          placeholder="Photo"
          required
        />
        <label for="inputTitre" className="sr-only">Titre</label>
        <input
          name="titre"
          type="text"
          id="inputTitre"
          className="form-control mb-4"
          placeholder="Titre"
          required
        />
        <label for="inputNiveau" className="sr-only">Niveau</label>
        <input
          name="niveau"
          type="text"
          id="inputNiveau"
          className="form-control mb-4"
          placeholder="Niveau"
          required
        />
        <label for="inputAge" className="sr-only">Age</label>
        <input
          name="age"
          type="text"
          id="inputAge"
          className="form-control mb-4"
          placeholder="Age"
          required
        />
        <label for="inputFormat" className="sr-only">Format</label>
        <input
          name="format"
          type="text"
          id="inputFormat"
          className="form-control mb-4"
          placeholder="Format"
          required
        />
        <label for="inputLangue" className="sr-only">Langue</label>
        <input
          name="langue"
          type="text"
          id="inputLangue"
          className="form-control mb-4"
          placeholder="Langue"
          required
        />
        <label for="inputDescription" className="sr-only">Description</label>
        <input
          name="description"
          type="text"
          id="inputDescription"
          className="form-control mb-4"
          placeholder="Description"
          required
        />
        <label for="inputThumbnails" className="sr-only">Thumbnails</label>
        <input
          name="thumbnails"
          type="text"
          id="inputThumbnails"
          className="form-control mb-4"
          placeholder="Thumbnails"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Send
        </button>
      </form>
    </div>

  </div>
);

export default Form;
