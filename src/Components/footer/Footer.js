import React from "react";
import { Link } from "react-router-dom";
import { BsFillClockFill } from "react-icons/bs";
// import { ImPhone } from "react-icons/im";
import { HiLocationMarker } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import Accreditation from "./Accreditation";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        {/* Accreditations */}
        <Accreditation />
        <div className="footer_content">
          <div className="footer_about">
            <h1 className="footer_aboutUs">About Us</h1>
            <p className="footer_about_p">
              Look no further for an accountant in Chiswick, West London. Our
              headquarters is based in Chiswick Business Park.
            </p>
            <Link to="/about">Read More</Link>
          </div>
          <div className="footer_links">
            <h1 className="footer_link_h1">Extra Links</h1>
            <ul>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>FAQ's</Link>
              </li>
              <li>
                <Link>News</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer_services">
            <h1 className="footer_link_h1">Our Services</h1>
            <ul>
              <li>
                <Link>Business Services</Link>
              </li>
              <li>
                <Link>Individual</Link>
              </li>
              <li>
                <Link>Wealth Management</Link>
              </li>
              <li>
                <Link>Estate Planning</Link>
              </li>
            </ul>
          </div>
          <div className="footer_contact">
            <h1 className="getInTouch">Get In Touch</h1>
            <div className="footer_address_section">
              <p className="footer_contact_p">
                <HiLocationMarker className="footer_location_logo" />
                16 Lyndhurst Road, Luton, England, LU1 1LN{" "}
              </p>
              <p className="footer_contact_p">
                <span className="footer_phn_logo">&#9990;</span>
                Tel: 02033558839; 01582432053; Mob: 07446861439
              </p>
              <p className="footer_contact_p">
                <SiGmail className="footer_gmail_logo" />
                info@priorityaccountancy.co.uk
              </p>
              <p className="footer_contact_p">
                <BsFillClockFill className="footer_clock_logo" />9 AM to 6 PM
                Mon to Fri
              </p>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="bottom_Section_footer">
          <p className="powerdby">
            © {new Date().getFullYear()} Priority Accountancy. Powered By{" "}
            <span className="eazmltd">EAZM LIMITED</span>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
