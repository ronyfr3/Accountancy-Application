import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Accreditation from "./Accreditation";
import { useDoubleTap } from "use-double-tap";
const Footer = () => {
  const [tx, setTx] = useState("Abdur Rakib Rony");
  const bind = useDoubleTap((event) => {
    setTx("Abdur Rakib Rony");
  });
  useEffect(() => {
    setTimeout(() => {
      setTx("Abdur Rakib Rony");
    }, 3000);
  });

  return (
    <>
      <div className="footer_section">
        {/* Accreditations */}
        <Accreditation />
        <div className="footer_content">
          <div className="footer_about">
            <h1 className="footer_aboutUs">About Us</h1>
            <p className="footer_about_p">
              We are here for your service.Our Quality of services makes you
              reliable.
            </p>
            <Link to="/about">Read More</Link>
          </div>
          <div className="footer_links">
            <h1 className="footer_link_h1">Extra Links</h1>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/service">Our Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/faq">FAQ's</Link>
              </li>
            </ul>
          </div>
          <div className="footer_services">
            <h1 className="footer_link_h1">Our Services</h1>
            <ul>
              <li>
                <Link to="/service">Company Accounts</Link>
              </li>
              <li>
                <Link to="/service">Self-Assesmemnt</Link>
              </li>
              <li>
                <Link to="/service">Value Added Tax</Link>
              </li>
              <li>
                <Link to="/service">Payroll</Link>
              </li>
              <li>
                <Link to="/service">Pension</Link>
              </li>
              <li>
                <Link to="/service">CIS & IR35</Link>
              </li>
              <li>
                <Link to="/service">Bookkeeping & Secretarial Services</Link>
              </li>
            </ul>
          </div>
          <div className="footer_contact">
            <h1 className="getInTouch">Get In Touch</h1>
            <div className="footer_address_section">
              <p className="footer_contact_p">
                <span className="footer_phn_logo">&#9990;</span>
                Mob: +880 1997513691 +880 1883921971
              </p>
              <p className="footer_contact_p">
                <SiGmail className="footer_gmail_logo" />
                <span className="sakdca">rakib.fstackdev@gmail.com</span>
              </p>
              {/* social logo */}
              <div className="icons_footer">
                <a href="/" rel="noreferrer" target="_blank">
                  <FaFacebook className="footer_social_icon1" />
                </a>
                <a href="/" rel="noreferrer" target="_blank">
                  <AiFillTwitterCircle className="footer_social_icon2" />
                </a>
                <a href="/" rel="noreferrer" target="_blank">
                  <AiFillInstagram className="footer_social_icon3" />
                </a>
                {/* <IoLogoWhatsapp className="header_social_icon4" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="bottom_Section_footer">
          <div className="hiddenname" {...bind}></div>
          <p className="powerdby">
            © {new Date().getFullYear()} Accountancy. Powered By{" "}
            <span className="eazmltd">{tx}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
