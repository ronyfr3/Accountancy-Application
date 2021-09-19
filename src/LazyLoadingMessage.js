import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// type: "Watch" | "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" |
//  "TailSpin" | "ThreeDots" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "CradleLoader"

const LazyLoadingMessage = () => {
  return (
    <div className="slsmsmsmsm">
      <Loader
        type="ThreeDots"
        className="esmsmsms"
        width="60px"
        height="60px"
        color="#2c2c49"
      />
    </div>
  );
};

export default LazyLoadingMessage;
