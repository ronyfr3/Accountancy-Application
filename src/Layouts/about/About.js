import React from "react";
import image from "../../images/joynal2.jpg";
import {
  FaLanguage,
  FaCrosshairs,
  FaChartPie,
  FaObjectGroup,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BiLineChart } from "react-icons/bi";
import { BsLifePreserver } from "react-icons/bs";

const About = () => {
  return (
    <div className="about_wrapper">
      {/* WHO WE ARE */}
      <div className="whoweare">
        <div className="whoweare_content">
          <h1>Who We Are</h1>
          <h2>Professional accountants delivering excellent service</h2>
          <article>
            Oasis Accountants are a team of Professional Accountants delivering
            excellent service understanding clients business financial goals.
          </article>
          <article>
            Our Team makes continuous effort to offer competent, efficient and
            client-focused services.
          </article>
          <article>
            We offer our services to Start-ups, Growing Business, Scale-up
            Business, SMEs, Sole Traders and Partnerships in the UK.
          </article>
          <article>
            Our team consists of 50 certified Accountants, Account Managers,
            Bookkeepers and support staff.
          </article>
        </div>
        <div className="whoweare_img_container">
          <img src={image} alt="" />
        </div>
      </div>

      {/* Why choose Priority? */}
      <div className="makesusdif">
        <h1>Why choose Priority?</h1>
        <article>
          At Oasis Accountants we offer expert advice with broad range of
          specialist that offer customised solutions for clients. The Most
          fundamental way we are different from the rest is our client focused
          approach, understanding client's current and future business needs
          with plans to action..
        </article>
        <article>
          The vision of the firm's founding Director, Shankar Devrashetty was to
          create a dynamic and passionate firm. 10 years of development and
          refinement has built the Oasis Accountants service offering into what
          it is today. The core purpose of our approach is to provide you with
          financial information that is truly meaningful as well as simply
          stated. This combined with the highest levels of care and passion for
          your business, has created an accountancy practice that is genuinely
          different.
        </article>
        <div className="icons_h5">
          <div className="sma_h5">
            <BsLifePreserver className="small" />
            <h5>Fixed Fee Services</h5>
          </div>
          <div className="sma_h5">
            <BiLineChart className="small" />
            <h5>R&D Tax Credits</h5>
          </div>
          <div className="sma_h5">
            <FaLanguage className="small" />
            <h5>Outsource Financial Director</h5>
          </div>
          <div className="sma_h5">
            <FaCrosshairs className="small" />
            <h5>Dedicated Account Managers</h5>
          </div>
          <div className="sma_h5">
            <FaObjectGroup className="small" />
            <h5>Management Accounts</h5>
          </div>
          <div className="sma_h5">
            <FiFileText className="small" />
            <h5>Advise & Financial Analysis</h5>
          </div>
          <div className="sma_h5">
            <FaChartPie className="small" />
            <h5>Tax Efficient Strategies</h5>
          </div>
        </div>
      </div>
      {/* Customer care */}
      <div className="sosjjnwj">
        <h1>our customer is our first priority</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default About;
