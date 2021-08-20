import React from "react";
import {
  FaLanguage,
  FaCrosshairs,
  FaChartPie,
  FaObjectGroup,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { BiLineChart } from "react-icons/bi";
import { BsLifePreserver } from "react-icons/bs";
import ImageBanner from "../../Components/ImageBanner";

const About = () => {
  return (
    <div className="about_wrapper">
      <ImageBanner name="about us" />
      {/* WHO WE ARE */}
      <div className="whoweare">
        <div className="whoweare_content">
          <p>Who We Are</p>
          <h1>Professional accountants delivering excellent service</h1>
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
          <img src="self2.jpeg" alt="" />
        </div>
      </div>
      {/* AWARDS */}
      <div className="awards">
        <h1>Awards</h1>
        <article>
          Top Accountant as per Vouched for and Hounslow Business Award Finalist
          for 2015, 2016 & 2018. British Accountancy Award Finalist 2019, West
          London Awards-Finance Business of the Year Finalist, Accounting &
          Audit Tax Awards-Best Family Run Accountancy Practice London. This
          will give you the assurance that you are working with the best. We
          serve more than 1000 small businesses and contractors and are highly
          recognized in the industry. Your dedicated account manager will call
          you on a frequent basis and you can have ongoing discussions and
          support with him around tax and any other area you may need. We will
          provide you with advice and support throughout our service.
        </article>
      </div>
      {/* WHATS MAKES US DIFFERENT */}
      <div className="makesusdif">
        <p>What Makes Us Different?</p>
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
    </div>
  );
};

export default About;
