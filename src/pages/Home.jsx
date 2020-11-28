import React, { useState } from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const Home = () => {
  const [searchInput, setSearchInput] = useState("Spiderman")
  const [results, setResults] = useState([])

  const fetchMovies = () => {
      fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=42d3e6f7`)
      .then((response) => response.json())
      .then((response) => {setResults(response)})
      .then(console.log(results))
  };

  return (
    <div>
      <MDBCol md="6">
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span
              className="input-group-text black lighten-3"
              id="basic-text1"
            >
              <MDBIcon onClick={fetchMovies} className="text-white" icon="search" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </MDBCol>
    </div>
  );
};

export default Home;
