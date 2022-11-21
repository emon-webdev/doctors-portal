import React from "react";

import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <div className="flex justify-between">
        <div className="section-title">
          <h2 className="text-xl font-bold text-primary">Testimonial</h2>
          <p className="font-bold text-4xl text-accent">What Our Patients Says</p>
        </div>
        <figure>
          <img src={quote} className=" w-24 lg:w-48" alt="" srcSet="" />
        </figure>
      </div>
      <div className="max-w-[1400px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          reviews.map(review=> (
            <Testimonial key={review._id} review={review} />
          ))
        }
      </div>
    </section>
  );
};

export default Testimonials;
