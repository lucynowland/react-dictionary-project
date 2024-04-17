import React from "react";
import Synonyms from "./Synonyms";
import "./SearchResults.css";

export default function Meanings(props) {
  console.log(props.meanings);

  if (props.meanings.example && props.meanings.synonyms) {
    return (
      <section className="MeaningsSection">
        <div className="Meanings">
          <h3>{props.meanings.partOfSpeech}</h3>
          <p>
            <strong>Definition:</strong> {props.meanings.definition}
          </p>
          <em>
            {" "}
            <strong>Exemplar:</strong> {props.meanings.example}
          </em>
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="MeaningsSection">
        <div className="Meanings">
          <h3>{props.meanings.partOfSpeech}</h3>
          <p>
            <strong>Definition:</strong> {props.meanings.definition}
          </p>
        </div>
      </section>
    );
  }
}
