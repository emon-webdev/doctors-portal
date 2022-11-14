import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor-small.png";

const MakeAppointment = () => {
  return (
    <section className="mb-12 mt-[200px]" style={{backgroundImage: `url(${appointment})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <div className="hero max-w-[1400px] mx-auto">
        <div className="hero-content h-[500px] p-0 flex-col lg:flex-row">
          <img src={doctor} alt="" className="hidden md:block -mt-[115px] lg:w-[495px] lg:h-[616px]  " />
          <div className="md:ml-[50px]">
            <h3 className="text-xl font-bold text-primary">Appointment</h3>
            <h1 className="font-bold text-4xl text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="primary-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
