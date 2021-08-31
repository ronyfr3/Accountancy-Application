import React from "react";
import as from "../images/as.jpg";
import vat from "../images/vat.jpg";
import tax from "../images/tax.jpg";
import pen from "../images/pen.jpg";
import pay from "../images/pay.jpg";
import work from "../images/work.jpg";
const Service = () => {
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
  return (
    <div className="service">
      <h1>our services</h1>
      <div className="service_container">
        {data.map((x, i) => {
          const { title, des, image, arr, arrTitle } = x;
          return (
            <div className="service_returnDiv">
              <div className="service_returnImgDiv">
                <img src={image} alt="" />
                <h1>{title}</h1>
                <div className="ksjsjs">
                  <h2>{des}</h2>
                  <p>{arrTitle}</p>
                  {arr.map((x, i) => {
                    return <li>{x}</li>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
