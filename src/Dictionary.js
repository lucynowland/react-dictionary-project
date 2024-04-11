import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [searchInput, setSearchInput] = useState("");

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching ${searchInput}...`);
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
