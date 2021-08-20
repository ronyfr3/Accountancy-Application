import React from "react";

const ImageBanner = ({ name }) => {
  return (
    <div className="imageBanner">
      <div className="headerImage_section">
        <img src="aboutImg.jpg" alt="" />
        <h1 className="about_aboutUs_h1">{name}</h1>
      </div>
    </div>
  );
};

export default ImageBanner;
