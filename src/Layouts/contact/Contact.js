import React, { useState } from "react";
import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import image from "../../images/joynal2.jpg";
import { BiMessageRoundedCheck } from "react-icons/bi";
const Contact = () => {
  const [inV, setInv] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInv({
      ...inV,
      [name]: value,
    });
  };
  const sendData = { ...inV };
  const sendToGmail = async (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: sendData,
    }).then((res) => {
      if (res.data.msg === "success") {
        window.alert("send");
      } else if (res.data.msg === "fail") {
        window.alert("fail");
      }
    });
  };
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div className="contact_form">
      <div className="koaoaee">
        <div className="contact_form_content">
          <p className="contact_use_to_book">
            Contact Us To Book Your Initial Consultation
          </p>
          <form onSubmit={sendToGmail}>
            <div className="form_sec1">
              <input
                type="text"
                name="name"
                value={inV.name}
                placeholder="Name"
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                value={inV.email}
                placeholder="Email"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="form_sec2">
              <input
                type="text"
                name="phone"
                value={inV.phone}
                placeholder="Phone Number"
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="text"
                name="subject"
                value={inV.subject}
                placeholder="Subject"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <textarea
              type="text"
              name="message"
              value={inV.message}
              placeholder="Type Your Message..."
              onChange={handleChange}
            />
            <button className="cont_btn">submit now</button>
          </form>
        </div>
        <div className="form_img">
          <img src={image} alt="" />
        </div>
      </div>
      {/* email phone section */}
      <div className="mao">
        <h1 className="jsjsjsoiwo">For More Details</h1>
        <div className="kopops">
          <div>
            <h2 className="oiop">Contact Number</h2>
            <p>Tel: 02033558839; 01582432053</p>
            <p> Mob: 07446861439</p>
          </div>
          <Mailto email="Info@Priorityaccountancy.Co.Uk" subject="" body="">
            <div className="hashbbjask">
              <BiMessageRoundedCheck className="BiMessageRoundedCheck" />
              <h2 className="mailto">Send Us A Message​​</h2>
              <p>Info@Priorityaccountancy.Co.Uk</p>
            </div>
          </Mailto>
        </div>
      </div>
    </div>
  );
};

export default Contact;
