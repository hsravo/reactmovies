import {Card, Button} from "react-bootstrap";
import Logo from "../assets//img/default-movie.png";
import './moviecard.scss'

const MovieCard = ({ movie }) => {
  return (
    <Card id="cardShow">
      <Card.Img id="cardImg" variant="top" src={movie.Poster === "N/A" ? Logo : movie.Poster} style={{ height:"20rem", objectFit:"cover" }} />
      <Card.Body id="cardBody">
        <Card.Title id="cardTitle">{movie.Title}</Card.Title>
        <Card.Text id="cardYear">{movie.Year}</Card.Text>

        <Button id="cardButton">More info</Button>

      </Card.Body>
    </Card>
  );
};

export default MovieCard;
