import React from "react";

const Testimonial = ({ review }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <div className="card w-full md:w-[385px] h-[270px] shadow-xl">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="card-actions mt-8 items-center">
          <div className="avatar mr-4">
            <div className="w-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4>{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
