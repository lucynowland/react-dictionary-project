import React from "react";
import "./Gallery.css";

export default function Gallery(props) {
  if (props.photos) {
    return (
      <section className="Gallery">
        <div className="row gy-4">
          <h3>Image Gallery</h3>
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                  <br />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
