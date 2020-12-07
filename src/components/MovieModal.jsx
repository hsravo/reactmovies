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
        <Modal.Title><h2>{content.Title} ({content.Year})</h2></Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body1"><img id="modal-poster" src={content.Poster === "N/A" ? Logo : content.Poster} alt="movie-poster"/></Modal.Body>
      <Modal.Body id="modal-body2">
        <h4>{content.Plot}</h4>
      </Modal.Body>
      <Modal.Body id="modal-body3">
        <h3>IMDb Rating : {content.imdbRating}</h3>
        <h6>Genre : {content.Genre}</h6>
        <h6>Actors : {content.Actors}</h6>
        <h6>Director : {content.Director}</h6>
        <h6>Production : {content.Production}</h6>
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
