import React from "react";
import "./SearchResults.css";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <section className="MeaningsSection">
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        <p>{props.meanings.definition}</p>
        <em>{props.meanings.example}</em>
      </div>
    </section>
  );
}
