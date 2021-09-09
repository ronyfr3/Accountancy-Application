import React, { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { FaHandPointUp } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import as from "../images/as.jpg";
import vat from "../images/vat.jpg";
import tax from "../images/tax.jpg";
import pen from "../images/pen.jpg";
import pay from "../images/pay.jpg";
import work from "../images/work.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceSection = () => {
  const history = useHistory();
  const goToServicePage = () => {
    history.push("/service");
  };

  const [indx, setIndx] = useState(0);
  const data = [
    {
      image: as,
      title: "Lorem Ipsum ",
      des: " Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorof a page when looking at its layout.",
      arr: [
        "All aspects of Self Assessment",
        "Dealing with Tax Returns",
        "Tax enquiries",
      ],
      arrTitle:
        "Beyond the payroll compliance service, we offer comprehensive advice on all employment tax issues including:",
    },
    {
      image: vat,
      title: "Lorem Ipsum ",
      des: " Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorof a page when looking at its layout.",
      arr: [
        "All aspects of Self Assessment",
        "Dealing with Tax Returns",
        "Tax enquiries",
      ],
      arrTitle:
        "Beyond the payroll compliance service, we offer comprehensive advice on all employment tax issues including:",
    },
    {
      image: tax,
      title: "Lorem Ipsum ",
      des: " Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorof a page when looking at its layout.",
      arr: [
        "All aspects of Self Assessment",
        "Dealing with Tax Returns",
        "Tax enquiries",
      ],
      arrTitle:
        "Beyond the payroll compliance service, we offer comprehensive advice on all employment tax issues including:",
    },
    {
      image: pen,
      title: "Lorem Ipsum ",
      des: " Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorof a page when looking at its layout.",
      arr: [
        "All aspects of Self Assessment",
        "Dealing with Tax Returns",
        "Tax enquiries",
      ],
      arrTitle:
        "Beyond the payroll compliance service, we offer comprehensive advice on all employment tax issues including:",
    },
    {
      image: work,
      title: "Lorem Ipsum ",
      des: " Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorof a page when looking at its layout.",
      arr: [
        "All aspects of Self Assessment",
        "Dealing with Tax Returns",
        "Tax enquiries",
      ],
      arrTitle:
        "Beyond the payroll compliance service, we offer comprehensive advice on all employment tax issues including:",
    },
    {
      image: pay,
      title: "Lorem Ipsum ",
      des: " Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorof a page when looking at its layout.",
      arr: [
        "All aspects of Self Assessment",
        "Dealing with Tax Returns",
        "Tax enquiries",
      ],
      arrTitle:
        "Beyond the payroll compliance service, we offer comprehensive advice on all employment tax issues including:",
    },
  ];
  const nextSlide = () => {
    setIndx(indx === data.length - 1 ? 0 : indx + 1);
  };
  const prevSlide = () => {
    setIndx(indx === 0 ? data.length - 1 : indx - 1);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  });

  return (
    <div className="serviceSec_wrapper">
      <h1 className="serviceSec_ourservices_h1" data-text="Services">
        Services
      </h1>
      {/* Slider */}
      <div className="serviceSec_content">
        {/* rightarrow */}
        <BsArrowLeft className="bsarrowleft" onClick={nextSlide} />
        <div className="serviceSec_details">
          {data.map((x, i) => {
            const { image, des, title } = x;
            return (
              <React.Fragment key={i}>
                {i === indx && (
                  <div className="serviceSec_info">
                    <LazyLoadImage src={image} alt="title" effect="blur" />
                    <div className="service_title_des">
                      <p className="service_title_des_title">{title}</p>
                      <small>{des}</small>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        {/* leftarrow */}
        <BsArrowRight className="bsarrowright" onClick={prevSlide} />
      </div>
      <button onClick={goToServicePage}>Check Our Services</button>
    </div>
  );
};

export default ServiceSection;
