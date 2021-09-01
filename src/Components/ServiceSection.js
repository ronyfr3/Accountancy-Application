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
      title: "Self-Assesmemnt ",
      des: "Personal tax services are available both for business owners and private individuals including…",
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
      title: "Company Accounts  ",
      des: "Preparing the annual accounts for Limited Companies, Partnerships, Sole Traders, Charities are core areas of our practice. However, these are also statutory requirements by Company House and HM Revenue and Customs",
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
      title: "Construction Indusry Scheme CIS & IR35",
      des: "Construction Industry Scheme (CIS) has an extensive impact on contractors and subcontractors. There are significant penalties for failure to operate the CIS correctly which can result in serious consequences for businesses",
      arr: [
        "Registration to CIS as a Subcontractor",
        "Registration to CIS as a Contractor",
        "Application for Gross payment status",
      ],
      arrTitle:
        "Beyond the payroll compliance service, we offer comprehensive advice on all employment tax issues including:",
    },
    {
      image: pay,
      title: "Payroll ",
      des: "Employees are always helping hands and essential parts for any business to grow further. We ensure our clients that every requirement are in place and feel confidence in the business.",
      arr: ["Employee payslips", "Monthly summaries", "Departmental reports"],
      arrTitle:
        "We run payrolls on time and can provide a tailor made service for your business including…",
    },
    {
      image: pen,
      title: "Pension",
      des: "We consider numerous circumstances of the business while preparing any VAT or dealing with any VAT investigation. Our team of qualified members ensure that all our effort drives the highest benefits for our clients.      ",
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
      title: "Value Added Tax (VAT)",
      des: "It is mandatory requirements to register every business for VAT purposes of which turnover either expected or exceeded £77,000 per annum.At Maxwell, we assist and advice our clients whether to register for VAT and ensure that the chosen options of the VAT scheme serves the highest benefits for our clients",
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
      title: "Bookkeeping & Secretarial Services",
      des: "Forming a Limited company is the first step to move forward. We not only assist to register the company, we also advice on pros and cons of registering Limited Company for our clients.",
      arrTitle: "Our Company formation packages can include:",
      arr: [
        "Appointment of directors",
        "Appointment of company secretary",
        "Issue of subscriber shares",
      ],
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

  // ANIMATIONS
  const options = {
    root: null, // use the document's viewport as the container
    rootMargin: "0px", // % or px - offsets added to each side of the intersection
    threshold: 0.5, // percentage of the target element which is visible
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  // Get all the `.box` from DOM and attach the observer to these
  //for header
  document.querySelectorAll(".serviceSec_ourservices_h1").forEach((item) => {
    observer.observe(item);
  });
  // Get all the `.box` from DOM and attach the observer to these
  //for handup
  document.querySelectorAll(".handup").forEach((item) => {
    observer.observe(item);
  });
  // ENDOF ANIMATION

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
                    <LazyLoadImage src={image} alt="title" />
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
      <div className="clickybtn">
        <div className="handup">
          <AiOutlineLine className="aioutline" /> Explore
        </div>
        <FaHandPointUp className="fahandup" onClick={goToServicePage} />
      </div>
    </div>
  );
};

export default ServiceSection;
