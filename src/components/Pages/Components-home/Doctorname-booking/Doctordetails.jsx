import React from 'react'

export const Doctordetails = (props) => {
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
        </div>
    )
}
