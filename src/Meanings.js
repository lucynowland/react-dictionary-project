import React from "react";
import "./SearchResults.css";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <section className="MeaningsSection">
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <em>{definition.example}</em>
            </div>
          );
        })}
      </div>
    </section>
  );
}
