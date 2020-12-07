import { React, useState } from "react";
import {Card, Button} from "react-bootstrap";
import Logo from "../assets//img/default-movie.png";
import MovieModal from "./MovieModal"
import './moviecard.scss'

const MovieCard = ({ movie }) => {
  const [show, setShow] = useState(false);
  
  const showModal = () => {
    setShow(true);
  }

  return (
    <Card id="cardShow">
      <Card.Img id="cardImg" variant="top" src={movie.Poster === "N/A" ? Logo : movie.Poster} style={{ height:"20rem", objectFit:"cover" }} />
      <Card.Body id="cardBody">
        <Card.Title id="cardTitle">{movie.Title}</Card.Title>
        <Card.Text id="cardYear">{movie.Year}</Card.Text>

        <Button id="cardButton" onClick={showModal}>MORE INFO
        </Button>
        <MovieModal show={show} setShow={setShow} movie={movie}/>

      </Card.Body>
    </Card>
  );
};

export default MovieCard;
