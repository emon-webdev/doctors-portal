import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import InfoCards from './InfoCards';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div >
            <Banner/>
            <InfoCards/>
            <Services/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Home;