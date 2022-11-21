import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../Shared/Loading";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
const date = format(selectedDate, 'PP');
  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/v2/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }

  return (
    <section className="">
      <div className="section-title text-center">
        <h3 className="text-[22px] font-normal text-primary">
          Available Services on {format(selectedDate, "PP")}
        </h3>
        <p className="font-normal text-[22px] text-[#939393]">
          Please select a service.
        </p>
      </div>
      <div className="max-w-[1400px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
