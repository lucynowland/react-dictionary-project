import React from "react";
import Synonyms from "./Synonyms";
import "./SearchResults.css";

export default function Meanings(props) {
  if (props.meanings.example && props.meanings.synonyms) {
    return (
      <section className="MeaningsSection">
        <div className="Meanings container-fluid">
          <h3>{props.meanings.partOfSpeech}</h3>
          <h6 className="meaningsHeading">Definition:</h6>
          <p className="definition">{props.meanings.definition}</p>
          <br />
          <h6 className="meaningsHeading">Exemplar:</h6>
          <em>{props.meanings.example}</em>
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="MeaningsSection">
        <div className="Meanings">
          <h3>{props.meanings.partOfSpeech}</h3>
          <h6 className="meaningsHeading">Definition:</h6>
          <p className="definition">{props.meanings.definition}</p>
          <Synonyms synonyms={props.meanings.synonyms} />
        </div>
      </section>
    );
  }
}
