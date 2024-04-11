import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchInput, setSearchInput] = useState("");

  function handleSearchResponse(response) {
    console.log(response.data);
  }

  function searchWord(event) {
    event.preventDefault();

    let apiKey = "b4695dbeo3231b4ta37cdcd77c20d1fa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchInput}&key=${apiKey}`;

    axios.get(apiUrl).then(handleSearchResponse);
  }

  function handleWordChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="SearchEngine" onSubmit={searchWord}>
        <input
          type="search"
          placeholder="Enter a Word..."
          className="search-input"
          onChange={handleWordChange}
        />
        <input type="submit" value="Search" className="btn btn-styling" />
      </form>
    </div>
  );
}
