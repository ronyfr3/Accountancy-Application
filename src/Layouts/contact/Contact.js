import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [dropdown, setDropdown] = useState("");
  console.log(dropdown);
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
  const sendData = { ...inV, dropdown };
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

  // LISTS
  const lists = [
    "mobile app development",
    "web app development",
    "custom app development",
    "web & mobile app development",
  ];
  return (
    <div className="contactPage">
      <h1>Get In Touch</h1>
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
        <label>type of services you are looking for</label>
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => {
            setDropdown(e.target.value);
          }}
        >
          <option value="DEFAULT" disabled hidden>
            Mobile App Development
          </option>{" "}
          {lists &&
            lists.map((x, i) => {
              return (
                <option value={x} key={i}>
                  {x}
                </option>
              );
            })}
        </select>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
