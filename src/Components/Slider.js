import React from "react";
import Carousel from "react-multi-carousel";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import carousel3 from "../images/carousel3.jpg";
import carousel4 from "../images/carousel4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
const Slider = () => {
  let history = useHistory();
  const images = [
    {
      image: carousel1,
      text: "Priority Accountancy",
    },
    {
      image: carousel2,
      text: "Priority Accountancy",
    },
    {
      image: carousel3,
      text: "Priority Accountancy",
    },
    {
      image: carousel4,
      text: "Priority Accountancy",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="slider_wrapper">
      <Carousel
        className="carousel"
        centerMode={false}
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true} //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={4300}
        keyBoardControl={false}
        itemClass="item_class"
        additionalTransfrom={0}
        customTransition="transform 0.4s"
        // transform 300ms ease-in-out	Configure your own anaimation when sliding
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        //   dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-10-px"
      >
        {images.map((x, i) => {
          const { image, text } = x;
          return (
            <div className="slider_image_info" key={i}>
              <LazyLoadImage
                src={image}
                alt=""
                effect="blur"
                className="slider_image"
              />
              <h1>{text}</h1>
              <button onClick={() => history.push("/about")}>Learn More</button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
