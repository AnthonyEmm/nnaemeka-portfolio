import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AboutMe from "../assets/About.mp4";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="content">
          <div className="video">
            <video src={AboutMe} alt="about me video" controls />
          </div>
          <p>
            I am a passionate software developer with an enthusiasm for building
            efficient and innovative solutions. 🖥️Proficient in HTML5, CSS3,
            JavaScript, Reactjs, MongoDB, PostgreSQL, Nodejs, Git and Github.
            📱I thrive on learning new complex concepts that transforms into
            user-friendly applications. 🌍By having a growth mindset, I strive
            to stay updated on latest tech industry trends to deliver
            cutting-edge solutions that satisfies user experiences.🕊️
          </p>
          <div>
            <Link to="/contact" className="btn-about">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
