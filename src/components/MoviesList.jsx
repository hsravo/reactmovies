import MovieCard from "../components/MovieCard";
import {Container,Row,Col} from "react-bootstrap";

const MoviesList = ({results}) => {

  return (
      <Container>
        <Row className="justify-content-md-center">
        {results.Search?.map((movie) => (
        <Col>
          <MovieCard movie={movie}/>
        </Col>))}
        </Row>      
      </Container>
  )

}

export default MoviesList;