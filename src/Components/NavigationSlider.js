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
const NavigationSlider = () => {
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
  return (
    <div className="navslider">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={10000}
        centerMode={false}
        className=""
        containerClass="containerr"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass="itemsss"
        keyBoardControl={false}
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        slidesToSlide={2}
        swipeable={false}
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
