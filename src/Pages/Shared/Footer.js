import React from "react";
import { Link } from "react-router-dom";
import footerGg from '../../assets/images/footerGg.png';
const Footer = () => {
  return (
    <footer className="py-12" style={{backgroundImage: `url(${footerGg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <div className="footer mb-14 max-w-[1400px] mx-auto px-4">
        <div className="mt-8">
          <span className="footer-title font-bold text-[18px] text-[#939393]">
            Services
          </span>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            Emergency Checkup
          </Link>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            Monthly Checkup
          </Link>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            Weekly Checkup
          </Link>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            Deep Checkup
          </Link>
        </div>
        <div className="mt-8">
          <span className="footer-title font-bold text-[18px] text-[#939393]">
            ORAL HEALTH
          </span>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            Fluoride Treatment
          </Link>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            Cavity Filling
          </Link>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            Teath Whitening
          </Link>
        </div>
        <div className="mt-8">
          <span className="footer-title font-bold text-[18px] text-[#939393]">
            OUR ADDRESS
          </span>
          <Link className="link link-hover text-[#3A4256] text-[16px]">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
