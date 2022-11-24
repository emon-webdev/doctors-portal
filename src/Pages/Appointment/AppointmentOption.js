import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name,price, slots } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 0 ? "spaces" : "space"} available
        </p>
        <p><small>Price: $ {price}</small></p>
        <div className="card-actions justify-center ">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
