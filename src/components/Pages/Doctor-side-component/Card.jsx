import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import "tachyons";
import "react-datepicker/dist/react-datepicker.css";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

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
export const Card = (props) => {
  const [value, onChange] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-wrap content-center justify-center">
      <div
        className="container p-3 my-3 border tc ma4 justify-center text-center"
        style={{ width: 300, left: "10" }}
      >
        <img
          src={props.image}
          alt="FUCK_OFF_DINGUS"
          className="mt0 tc text-center self-center"
          style={{ width: "200px", height: "200px", marginLeft: 30 }}
        />
        <h5 className="tc">Name: {props.name}</h5>

        <Button className="grow" onClick={handleClickOpen}>
          Book Appointment
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="tc">Confirm Booking?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to Book an Appointment on {value.toDateString()} for{" "}
              {props.name} ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" className="grow">
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" className="grow">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};