import React from "react";
import "./App.css"
const Course = (props) => {
  const { title, desc, image } = props;

  return(
    <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={image} alt="courses"/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
      </div>

      <div className="content">{desc}</div>
    </div>
  </div>
  )}

export default Course;
