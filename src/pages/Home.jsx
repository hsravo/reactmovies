import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import { Jumbotron, Container } from "react-bootstrap";
import { MDBCol } from "mdbreact";
import NavHome from "../components/NavHome.jsx";
import FooterHome from "../components/FooterHome.jsx";
import "./home.scss";
import vcr from "../assets/video/vcr.mp4";

const APIKEY = process.env.REACT_APP_API_SECRET_KEY;

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchMovies = () => {
    const searchTerm = searchInput.trim()
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${APIKEY}`)
      .then((response) => response.json())
      .then((response) => setResults(response));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput.length > 2) {
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div>
      <NavHome />
      <Jumbotron fluid>
        <video autoPlay muted loop id="my-video">
          <source src={vcr} />
        </video>
        <Container>
          <h2 id="introduction">Hello !</h2>
          <h4 id="presentation">
            Find your evening TV show with the <br></br>
            <a href="http://www.omdbapi.com" add target="blank">Open Movie</a> database
          </h4>
          <MDBCol id="searchbar" md="12">
            <div className="input-group md-form form-sm form-1 pl-0">
              <input
                value={searchInput}
                onChange={handleChange}
                className="form-control my-0 py-1"
                type="search"
                placeholder="Type the title of a movie, series, cartoon..."
                aria-label="Search"
              />
            </div>
          </MDBCol>
        </Container>
      </Jumbotron>
      <MoviesList results={results} />
      <FooterHome />
    </div>
  );
};

export default Home;
