import React from "react";
import image from "../images/carousel1.jpg";
const Career = () => {
  // malito
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div className="career_layout">
      <div className="popoingss">
        <img src={image} alt="" />
        <h2>Careers</h2>
      </div>
      <div className="muetd">
        <h1>careers</h1>
        <p>
          Choice Accountancy Ltd attracts and retains some of the best talent in
          the field, offering career opportunities across accountancy, taxation,
          business advisory and our many specialisms. Our working culture is
          proactive and client-focused. Our people are diverse and sociable.
          Below are some of the roles we are accepting applicants for:
        </p>
      </div>
      <div className="muetd">
        <h1>SALES ACCOUNT MANAGER</h1>
        <p>Please email your CV for future opportunities.</p>
        <Mailto email="info@priorityaccountancy.co.uk" subject="" body="">
          <button>Send CV</button>
        </Mailto>
      </div>
      <div className="muetd">
        <h1>TRAINEE ACCOUNTANT</h1>
        <p>Please email your CV for trainee accountant opportunities.</p>
        <Mailto email="info@priorityaccountancy.co.uk" subject="" body="">
          <button>Send CV</button>
        </Mailto>
      </div>
    </div>
  );
};

export default Career;
