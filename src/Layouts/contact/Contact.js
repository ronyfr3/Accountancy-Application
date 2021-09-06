import React, { useState } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

  return (
    <div className="contact_form">
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
        <LazyLoadImage src="self2.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Contact;
