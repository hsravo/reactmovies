import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Logo from "../assets//img/default-movie.png";
import "./moviemodal.scss";

const MovieModal = (props) => {
  const APIKEY = process.env.REACT_APP_API_SECRET_KEY;
  const [content, setContent] = useState([]);

  const fetchModal = () => {
    fetch(`http://www.omdbapi.com/?i=${props.movie.imdbID}&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((response) => setContent(response));
  };
  
  useEffect(() => {
    fetchModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);
  const handleClose = () => {
    props.setShow(false);
  }
  
  return (
    <Modal size="lg" id="moviemodal" show={props.show} onHide={handleClose}>
      <Modal.Header id="modal-header" closeButton>
        <Modal.Title>{content.Title}  ({content.Year})</Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body1"><img id="modal-poster" src={content.Poster === "N/A" ? Logo : content.Poster} alt="movie-poster"/></Modal.Body>
      <Modal.Body id="modal-body2">
      <ul>
        <li>{content.Released}</li>
        <li>{content.Plot}</li>
      </ul>
      </Modal.Body>
      <Modal.Footer id="modal-footer">
        <Button id="modal-button" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;
