import React from "react";
import Meanings from "./Meanings";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <h2>{props.results.word}</h2>
        <p>{props.results.phonetic}</p>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
