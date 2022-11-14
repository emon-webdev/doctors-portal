import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      icon: whitening,
    },
  ]; 

  return (
    <div className=" services-area max-w-[1400px] mx-auto py-16">
      <div className="section-title text-center">
        <h2 className="text-xl font-bold text-primary">Our Services</h2>
        <p className="font-bold text-4xl text-accent">Services We Provide</p>
      </div>
      <div className="max-w-[1400px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            servicesData.map(service=> (
                <Service key={service.id} service={service} />
            ))
        }
      </div>
    </div>
  );
};

export default Services;
