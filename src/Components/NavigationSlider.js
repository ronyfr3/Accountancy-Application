import React from "react";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import as from "../images/as.jpg";
import vat from "../images/vat.jpg";
import tax from "../images/tax.jpg";
import pen from "../images/pen.jpg";
import pay from "../images/pay.jpg";
import work from "../images/work.jpg";
import { Link } from "react-router-dom";
const NavigationSlider = ({ deviceType }) => {
  const data = [
    {
      image: as,
      title: "Self-Assesmemnt ",
    },
    {
      image: tax,
      title: "Company Accounts  ",
    },
    {
      image: work,
      title: "CIS & IR35",
    },
    {
      image: pay,
      title: "Payroll ",
    },
    {
      image: pen,
      title: "Pension",
    },
    {
      image: vat,
      title: "Value Added Tax",
    },
    {
      image: tax,
      title: "Bookkeeping & Secretarial Services",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="navslider">
      <Carousel
        centerMode={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true} //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={7000}
        keyBoardControl={false}
        customTransition="all 400ms ease-in-out"
        itemClass="item_class"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        // itemClass="itemClass"
      >
        {data.map((x) => {
          const { image, title } = x;
          return (
            <div className="navimahsjs" key={title}>
              <Link to="/service">
                <LazyLoadImage src={image} alt="" className="sliderrr_image" />
                <small>{title}</small>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NavigationSlider;
