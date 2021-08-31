import React from "react";

const ImageBanner = ({ name, image }) => {
  return (
    <div className="imageBanner">
      <div className="headerImage_section">
        <img src={image} alt="" />
        <h1 className="about_aboutUs_h1">{name}</h1>
      </div>
    </div>
  );
};

export default ImageBanner;
