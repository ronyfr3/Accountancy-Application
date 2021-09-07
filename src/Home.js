import React from "react";
import Map from "./Layouts/contact/Map";
import image1 from "./images/joynal1.jpg";
import loc1 from "./images/carousel2.jpg";
import loc2 from "./images/carousel4.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "./Components/Slider";
import NavigationSlider from "./Components/NavigationSlider";
const Home = () => {
  return (
    <>
      <Slider />
      <NavigationSlider />
      <div className="home_section">
        <div className="home_content">
          <div className="home_info">
            <div className="home_para">
              <h1 className="about_priority">
                about <span>priority accountancy</span>
              </h1>
              <p className="about_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen bookIt has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="readmore">Read More</button>
            </div>
            <div className="Home_image_sec">
              <LazyLoadImage src={image1} alt="" />
            </div>
          </div>
          {/* LOCATIONS */}
          <div className="location_section">
            <p className="our_location">our locations</p>
            <h1 className="come_visit">come and visit us</h1>
            <div className="loc_image">
              <div className="loc_img_text">
                <div className="ksksksshh">
                  <LazyLoadImage src={loc1} alt="" />
                </div>
                <div className="loc_text">
                  <h1 className="com_name">London Office</h1>
                  <small className="com_address">
                    8 Crescent Road, London E6 1ED<br></br>
                    United Kingdom <br></br>
                    Telephone: +44 (0) 2033558839; +44 (0) 7446861439<br></br>
                    Email: info@priorityaccountancy.co.uk
                  </small>
                </div>
              </div>
              <div className="loc_img_text">
                <div className="ksksksshh">
                  <LazyLoadImage src={loc2} alt="" />
                </div>
                <div className="loc_text">
                  <h1 className="com_name">Luton Office</h1>
                  <small className="com_address">
                    16 Lyndhurst Road Luton LU1 1LN<br></br>
                    United Kingdom <br></br>
                    Telephone: +44 (0) 1582432053; +44 (0) 7446861439<br></br>
                    Email: info@priorityaccountancy.co.uk
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </>
  );
};

export default Home;
