import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
const AppointmentBanner = ({ selectedDate, setSelectedDate}) => {
  return (
    <div>
      <div className="hero py-16">
        <div className="hero-content w-full p-0 justify-around flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="dentist-chair"
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              // footer={footer}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
