import React from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";
import { useState } from "react";
const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AvailableAppointments selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
};

export default Appointment;
