import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import styled from "styled-components";
import 'tachyons'
import "react-datepicker/dist/react-datepicker.css";

const Button = styled.button`
  margin-top: 10px;
  width: 70%;
  padding: 11px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(56, 45, 255);
  background: linear-gradient(
    90deg,
    rgba(56, 45, 255, 1) 0%,
    rgba(67, 67, 255, 1) 11%,
    rgba(0, 212, 255, 1) 100%
  );
  justify-content: "center";
  align-items: "center";
  &:hover {
    filter: brightness(1.03);
  }
`;
export const Doctordetails = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div
      className="flex flex-wrap"
    >
      <div
        className="container p-3 my-3 border tc ma4 justify-content-center"
        style={{ width: 300, left: "10" }}
      >
        <img
          src={props.image}
          alt="FUCK_OFF_DINGUS"
          className="mt0 tc"
          style={{ width: "200px", height: "200px" }}
        />
        <h5 className="tc">Name: {props.name}</h5>
        <h5 className="tc">Hospital: {props.work}</h5>
        <h5 className="tc">Specialist: {props.type}</h5>
        <h6 className="selectdate">Select Date</h6>
        <DatePicker selected={value} onChange={(date) => onChange(date)}/>

        <Button className="grow">Book Appointment</Button>
      </div>
    </div>
  );
};
