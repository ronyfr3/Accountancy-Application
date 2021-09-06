import React from "react";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img1 from "../../images/xeroo.png";
import img2 from "../../images/accas.jpg";
import img3 from "../../images/book.jpg";
import img4 from "../../images/icoo.jpg";

const Accreditation = () => {
  const images = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
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
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="accreditations">
      <h1 className="accreditations_h1">Accreditations</h1>
      <Carousel
        className="carousel"
        centerMode={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true} //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={4000}
        keyBoardControl={false}
        customTransition="all 2s ease"
        itemClass="item_class"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        //   dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {images.map((x, i) => {
          const { image } = x;
          return (
            <div className="image_accreditation">
              <LazyLoadImage src={image} alt="" className="acc_image" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Accreditation;
