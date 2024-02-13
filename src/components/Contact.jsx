import React from "react";
import "./Contact.css";
import {
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import meka from "../assets/PicFB.jpg";
const Contact = () => {
  return (
    <div className="info">
      <div className="info-container">
        <div className="photo">
          <img src={meka} alt="my photo" />
        </div>
        <h1>
          I am currently looking for new opportunities <br /> and I'd love to
          connect 🫱🏿‍🫲🏼
        </h1>
        <div className="left">
          <div className="location">
            <p>
              <FaHome
                size={25}
                style={{
                  color: "aqua",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
                title="Address"
              />
              Bavaria (Bayern) Germany
            </p>
          </div>

          <div className="phone">
            <p>
              <FaPhone
                size={25}
                style={{
                  color: "aqua",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
                title="Phone"
              />
              +49-175-684-6871
            </p>
          </div>
          <div className="email">
            <Link
              title=" Send Email"
              to="https://mail.google.com/mail/?view=cm&fs=1&to=emesowumn@gmail.com"
              target="_blank"
            >
              <p>
                <FaMailBulk
                  size={25}
                  style={{
                    color: "aqua",
                    marginRight: "1rem",
                    cursor: "pointer",
                  }}
                />
                emesowumn@gmail.com
              </p>
            </Link>
          </div>
        </div>

        <div className="social">
          <Link
            to="https://www.linkedin.com/in/nnaemeka-emesowum-31b15823a/"
            target="_blank"
          >
            <FaLinkedinIn
              size={40}
              style={{
                backgroundColor: "blue",
                color: "white",
                marginLeft: "1rem",
                cursor: "pointer",
                borderRadius: "0.5rem",
              }}
              title="LinkedIn"
            />
          </Link>
          <Link to="https://github.com/AnthonyEmm" target="_blank">
            <FaGithub
              size={40}
              style={{
                color: "white",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
