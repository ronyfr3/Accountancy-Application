import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing
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
          <LazyLoadImage
            src="https://media.istockphoto.com/photos/young-businesswoman-in-a-modern-office-picture-id1291622774?b=1&k=20&m=1291622774&s=170667a&w=0&h=h9-SLbC5ZWfsqsOuCtBzbRNbnk97L1DzcxAV_oo9u24="
            alt=""
          />
        </div>
      </div>

      {/* Why choose Priority? */}
      <div className="makesusdif">
        <h1>Why choose Priority?</h1>
        <article>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing
        </article>
        <article>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing
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
