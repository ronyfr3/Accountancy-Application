import React from "react";
import Carousel from "react-multi-carousel";

const Accreditation = () => {
  const images = [
    {
      image: "xero.png",
    },
    {
      image: "ico.jpg",
    },
    {
      image: "acca.jpg",
    },
    {
      image: "books.png",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="accreditations">
      <h1 className="accreditations_h1">Accreditations</h1>
      <Carousel
        className="carousel"
        centerMode={true}
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true} //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={false}
        customTransition="all .4"
        itemClass="item_class"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        //   dotListClass="custom-dot-list-style"
        //   itemClass="carousel-item-padding-10-px"
      >
        {images.map((x, i) => {
          const { image } = x;
          return (
            <div className="image_accreditation">
              <img src={image} alt="" className="acc_image" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Accreditation;
