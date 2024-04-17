import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchInput, setSearchInput] = useState("");
  let [results, setSearchResults] = useState(null);

  function handleSearchResponse(response) {
    setSearchResults(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
  }

  function searchWord(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = "b4695dbeo3231b4ta37cdcd77c20d1fa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchInput}&key=${apiKey}`;

    axios.get(apiUrl).then(handleSearchResponse);

    // documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "CKBYU3peu8gztGPyM172JU1Karg5lk9GsWw0MVvRh8UDGWU2eLrHbFAO";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=1`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <SearchResults results={results} />
    </div>
  );
}
