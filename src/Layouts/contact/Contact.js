import React, { useState } from "react";
import axios from "axios";
import ImageBanner from "../../Components/ImageBanner";
import Map from "./Map";

const Contact = () => {
  const [inV, setInv] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleSubmit = (e) => {
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
    <>
      <ImageBanner name="Contact Us" />
      <div className="contactPage">
        <h1 className="feelfree_h1">FEEL FREE TO CONTACT US</h1>
        <form onSubmit={sendToGmail}>
          <label>Name</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={inV.name}
            onChange={handleSubmit}
            autocorrect="off"
            autocapitalize="none"
            autoComplete="off"
          ></input>
          <br></br>
          <label>Email</label>
          <br></br>
          <input
            type="email"
            name="email"
            value={inV.email}
            onChange={handleSubmit}
            autocorrect="off"
            autocapitalize="none"
            autoComplete="off"
          ></input>
          <br></br>
          <label>Phone</label>
          <br></br>
          <input
            type="text"
            name="phone"
            value={inV.phone}
            onChange={handleSubmit}
            autocorrect="off"
            autocapitalize="none"
            autoComplete="off"
          ></input>
          <br></br>
          <label>Message</label>
          <br></br>
          <textarea
            type="text"
            name="message"
            value={inV.message}
            onChange={handleSubmit}
          ></textarea>
          <br></br>
          <button className="submit_now_contactBtn">Submit now</button>
        </form>
        <Map />
      </div>
    </>
  );
};

export default Contact;
