import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots } = treatment;
  
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patient = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient,
      slot,
      email,
      phone,
    };
    console.log(booking);
    //to do : send data to the server
    //and once data is saved the modal

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="text-center">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <select
              name="slot"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              placeholder="Full Name"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <input
              type="text"
              defaultValue={user?.email}
              name="email"
              required
              readOnly
              placeholder="Email"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />
            <input
              type="text"
              name="phone"
              required
              placeholder="Phone Number"
              className="input input-bordered input-info w-full max-w-[475px] h-[48px] mb-5"
            />

            <input
              type="submit"
              value="SUBMIT"
              className="btn btn-accent w-full text-white max-w-[475px] h-[48px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
