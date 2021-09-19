import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../images/prior.png";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);
  // malito
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div className="header_section">
      {/* UPPER SECTION OF HEADER */}
      <nav>
        <ul>
          <li>
            <span className="phonelogo">&#9990;</span>
            <div className="phnNum">
              <p>+44 20 3355 8839</p>
              <p> +44 1582432053</p>
            </div>
          </li>
          <li>{/* <p>info@priorityaccountancy.co.uk</p> */}</li>
          <div className="icons_header">
            <Mailto email="info@priorityaccountancy.co.uk" subject="" body="">
              <MdEmail className="header_social_icon4" />
            </Mailto>
            <AiFillTwitterCircle className="header_social_icon2" />
            <FaFacebook className="header_social_icon1" />
            <AiFillLinkedin className="header_social_icon3" />
          </div>
        </ul>
      </nav>
      <header>
        <div className="header_image">
          <img src={image} alt="" />
          <div className="apdfn">
            <b>Priority Accountancy</b>
            <small>we're here to assist your business succeed..</small>
          </div>
        </div>

        <div className={show ? "hideLinks" : "second_header"}>
          <ul>
            <li>
              <Link to="/" onClick={() => setShow(false)}>
                <FaHome className="home_icon" />
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShow(false)}>
                about us
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={() => setShow(false)}>
                our services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShow(false)}>
                contact us
              </Link>
            </li>
            <li>
              <Link to="/career" onClick={() => setShow(false)}>
                careers
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setShow(false)}>
                faq's
              </Link>
            </li>
          </ul>
        </div>
        <div className="hambergur">
          {!show ? (
            <span className="hmenu" onClick={() => setShow(!show)}>
              &#9781;
            </span>
          ) : (
            <span className="hmenu" onClick={() => setShow(false)}>
              &#9747;
            </span>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
