import {Card, Button} from "react-bootstrap";
import Logo from "../assets//img/default-movie.png";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem", height: "35rem", margin:"1rem"}}>
      <Card.Img variant="top" src={movie.Poster === "N/A" ? Logo : movie.Poster} style={{ height:"20rem", objectFit:"cover" }} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Year}</Card.Text>
        <Button variant="primary">Page du film</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
