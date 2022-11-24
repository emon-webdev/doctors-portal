import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  console.log("booking data", booking);
  return (
    <div>
      <h2 className="text-2xl mb-6 text-[#000000]  font-medium">
        Payment for {booking.treatment}
      </h2>
      <p>
        Please pay ${booking.price} for your appointment on{" "}
        {booking.appointmentDate} at {booking.slot}
      </p>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
