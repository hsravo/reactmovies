import React, { useState, useEffect } from "react";
import MoviesList from "../components/MoviesList";
import { MDBCol } from "mdbreact";
import './home.scss';

const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const [results, setResults] = useState([])

  const fetchMovies = () => {
      fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=42d3e6f7`)
      .then((response) => response.json())
      .then((response) => setResults(response))
      .then((response) => (console.log(results)))
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
      <MDBCol id="searchbar" md="10">
        <div className="input-group md-form form-sm form-1 pl-0">
          <input
            value={searchInput}
            onChange={handleChange}
            className="form-control my-0 py-1"
            type="text"
            placeholder="Recherchez un film, une série..."
            aria-label="Search"
          />
        </div>
      </MDBCol>
      <MoviesList results={results}/>
    </div>
  );
};

export default Home;
