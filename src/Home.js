import React from "react";
import Map from "./Layouts/contact/Map";
import ServiceSection from "./Components/ServiceSection";
import image1 from "./images/self1.jpeg";
const Home = () => {
  return (
    <div className="home_section">
      <div className="home_content">
        <div className="home_info">
          <div className="home_para">
            <h1 className="about_priority">
              about <span>priority accountancy</span>
            </h1>
            <p className="about_text">
              Look no further for an accountant - our headquarters is based in
              Lyndhurst Road , Luton, United Kingdom . Our newest office is in
              Bromley, Kent and is accessible for all accountancy customers in
              South East London and Kent. Oasis offers a “big city” level of
              expertise and a vast range of specialist services. The most
              fundamental way in which we differ from the rest of the market is
              in our unique approach to clients needs.
            </p>
            <button className="readmore">Read More</button>
          </div>
          <div className="Home_image_sec">
            <img src={image1} alt="" />
          </div>
        </div>
        {/* SERVICE SECTION */}
        <ServiceSection />
        {/* LOCATIONS */}
        <div className="location_section">
          <p className="our_location">our locations</p>
          <h1 className="come_visit">come and visit us</h1>
          <div className="loc_image">
            <div className="loc_img_text">
              <img src="loc1.jpg" alt="" />
              <div className="loc_text">
                <h1 className="com_name">London Office</h1>
                <address className="com_address">
                  8 Crescent Road, London E6 1ED<br></br>
                  United Kingdom <br></br>
                  Telephone: +44 (0) 2033558839; +44 (0) 7446861439<br></br>
                  Email: info@priorityaccountancy.co.uk
                </address>
              </div>
            </div>
            <div className="loc_img_text">
              <img src="loc2.jpg" alt="" />
              <div className="loc_text">
                <h1 className="com_name">Luton Office</h1>
                <address className="com_address">
                  16 Lyndhurst Road Luton LU1 1LN<br></br>
                  United Kingdom <br></br>
                  Telephone: +44 (0) 1582432053; +44 (0) 7446861439<br></br>
                  Email: info@priorityaccountancy.co.uk
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Home;
