import React from "react";
import "./file.css";
import "tachyons";
import styled from "styled-components";

const MainDiv = styled.div`
  background: #005c97; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #363795,
    #005c97
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(56, 45, 255, 1) 0%,
      rgba(67, 67, 255, 1) 11%,
      rgba(0, 212, 255, 1) 100%
    );
    filter: brightness(1.03);
  }
`;

export const NameCard = (props) => {
  return (
    <MainDiv
      className="avatarstyle ma4 bg-light-purple dib pa3 tc grow shadow-4 br4"
      style={{ maxWidth: "250px" }}
    >
      <img src={`https://joeschmoe.io/api/v1/${props.name} `} alt="Fuck-You" />
      <h3 style={{ color: "white", fontSize: 20, margin: 5 }}>{props.name}</h3>
      <p style={{ color: "white" }}>{props.type}</p>
      <p style={{ color: "white" }}>{props.work}</p>
    </MainDiv>
  );
  //
};
