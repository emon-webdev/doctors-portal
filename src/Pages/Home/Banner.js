import React from "react";
import chair from '../../assets/images/chair.png';

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair} alt="chair"
          className="w-full md:max-w-md  rounded-lg shadow-2xl"
        />
        <div className="text-left">
          <h1 className="text-5xl font-bold">Your New S mile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="primary-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
