import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    setLoading(true);
  }

  return (
    <div>
      <div className="background">
        <div className="content">
          <p>👋🏿Hi, I'm Nnaemeka C. Emesowum</p>
          <h1>
            SOFTWARE <span className="span">DEVELOPER</span>
          </h1>
          <div className="loader">
            <div className="container">
              <div className="carousel">
                <div className="love"></div>
                <div className="love"></div>
                <div className="love"></div>
                <div className="love"></div>
                <div className="love"></div>
                <div className="love"></div>
                <div className="love"></div>
              </div>
            </div>
            <div className="container">
              <div className="carousel">
                <div className="death"></div>
                <div className="death"></div>
                <div className="death"></div>
                <div className="death"></div>
                <div className="death"></div>
                <div className="death"></div>
                <div className="death"></div>
              </div>
            </div>
            <div className="container">
              <div className="carousel">
                <div className="robots"></div>
                <div className="robots"></div>
                <div className="robots"></div>
                <div className="robots"></div>
                <div className="robots"></div>
                <div className="robots"></div>
                <div className="robots"></div>
              </div>
            </div>
          </div>
          <div>
            <Link to="/projects" className="btn">
              {loading ? "Loading Portfolio..." : "Portfolio"}
            </Link>
            <Link
              to="https://drive.google.com/file/d/1GFKzlkdnGFqX-9lPVWyuOXN3LOkoNVVQ/view?usp=sharing"
              className="btn btn-light"
              target="_blank"
              title="Download Resume"
            >
              {loading ? "Loading Resume..." : "Resume"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
