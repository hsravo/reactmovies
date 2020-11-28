import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { MDBCol, MDBIcon } from "mdbreact";

const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const [results, setResults] = useState([])

  const fetchMovies = () => {
      fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=42d3e6f7`)
      .then((response) => response.json())
      .then((response) => setResults(response))
  };

  const handleChange = (event) => {
      const { value } = event.target
      setSearchInput(value)
  }
    
    useEffect( () => {
      if (searchInput.length > 2) {
        fetchMovies()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput])

  return (
    <div>
      <MDBCol md="6">
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span
              className="input-group-text grey lighten-3"
              id="basic-text1"
            >
              <MDBIcon className="text-white" icon="search" />
            </span>
          </div>
          <input
            value={searchInput}
            onChange={handleChange}
            className="form-control my-0 py-1"
            type="text"
            placeholder="Rechercher un film"
            aria-label="Search"
          />
        </div>
      </MDBCol>
      <div>
        {results.Search?.map((movie) => (
          <div>
            <MovieCard movie={movie}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
