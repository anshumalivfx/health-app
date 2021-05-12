import React, {useState} from "react";
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";



export const Doctordetails = (props) => {
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="container p-3 my-3 border tc ma4 justify-content-center">
      <img
        src={props.image}
        alt="FUCK_OFF_DINGUS"
        className="mt0 tc"
        style={{ width: "200px", height: "200px" }}
      />
      <h5 className="tc">Name: {props.name}</h5>
      <h5 className="tc">Hospital: {props.work}</h5>
      <h6 className="selectdate">Select Date</h6>
      <DatePicker selected={value} onChange={date => onChange(date)} />
      <Link className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple ma4" to="#" style={{color: 'white'}}> Book Appointment</Link>

    </div>
  );
};
