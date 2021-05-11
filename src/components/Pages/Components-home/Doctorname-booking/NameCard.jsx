import React from "react";
import "./file.css";
import "tachyons";

export const NameCard = (props) => {
  return (
    <div className="avatarstyle ma4 bg-light-purple dib pa3 tc grow shadow-4 hover-bg-dark-blue br4">
      <img src={`https://joeschmoe.io/api/v1/${props.name} `} alt="Fuck-You" />
      <h1 style={{ color: "white" }}>{props.name}</h1>
      <p style={{ color: "white" }}>{props.work}</p>
    </div>
  );
  //
};
