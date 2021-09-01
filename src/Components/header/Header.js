import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import image from "../../images/prio.jpg";
import {
  AiFillTwitterCircle,
  AiOutlineMenu,
  AiFillLinkedin,
} from "react-icons/ai";
// import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaHome } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header_section">
      {/* UPPER SECTION OF HEADER */}
      <nav>
        <ul>
          <li>
            <div className="phnNum">
              <ImPhone className="phone" />
              <small>+44 20 3355 8839</small>
            </div>
          </li>
          <div className="icons_header">
            <FaFacebook className="header_social_icon1" />
            <AiFillTwitterCircle className="header_social_icon2" />
            <AiFillLinkedin className="header_social_icon3" />
            {/* <IoLogoWhatsapp className="header_social_icon4" /> */}
          </div>
        </ul>
      </nav>
      <header>
        <div className="header_image">
          <img src={image} alt="" />
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
                about
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={() => setShow(false)}>
                services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShow(false)}>
                contact
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={() => setShow(false)}>
                news
              </Link>
            </li>
            <li>
              <Link to="/resource" onClick={() => setShow(false)}>
                resources
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
            <AiOutlineMenu onClick={() => setShow(!show)} className="hmenu" />
          ) : (
            <GrClose onClick={() => setShow(!show)} className="hmenu" />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
