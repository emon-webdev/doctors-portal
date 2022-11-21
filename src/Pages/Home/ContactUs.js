import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section
      className="mb-12 py-16 mt-[200px]"
      style={{
        backgroundImage: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero">
        <div className="hero-content p-0 text-center">
          <div className="max-w-md">
            <div className="section-title text-center mb-10">
              <h2 className="text-xl font-bold text-primary">Contact Us</h2>
              <p className="font-bold text-4xl text-white">
                Stay connected with us
              </p>
            </div>
            <form>
              <input
                type="text"
                placeholder="Email Address"
                className="input mb-5 input-bordered input-accent w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input mb-5 input-bordered input-accent w-full "
              />
              <textarea
                className="textarea mb-5 textarea-info w-full "
                placeholder="Your message"
              ></textarea>
              <div>
                <button type="submit" className="primary-btn ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
