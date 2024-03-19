import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import Movix from "../assets/movixinfo.png";
import XRental from "../assets/xrental-new.png";
import Cooking from "../assets/NG_New.png";
import Blog5 from "../assets/Blog5.png";
import TaskMgt from "../assets/my-todo.png";
import CarStand from "../assets/Car-stand.png";
import IP from "../assets/IP_IMG.png";
import { DiMongodb } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { FaFontAwesome } from "react-icons/fa";

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGit,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiContentful,
  SiChakraui,
  SiStyledcomponents,
  SiExpress,
  SiLeaflet,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiTypescript,
  SiVercel,
  SiHeadlessui,
} from "react-icons/si";

const Projects = () => {
  return (
    <div className="hero-text">
      <h1> 👨🏿‍💻 Projects & Tech Stack </h1>
      <div className="heading">
        <Link
          to="https://xrental.onrender.com/"
          target="_blank"
          className="card"
          title="View More"
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={XRental} alt="X Rental" />
            </div>
            <div className="card-back">
              <p>
                &copy;X Rental
                <br /> Apartment Finder App
              </p>
            </div>
          </div>
          <p>
            <FaReact
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Reactjs"
            />
            <DiMongodb
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="MongoDB"
            />
            <FaNodeJs
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Nodejs"
            />
            <FaCss3
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="CSS3"
            />
            <FaBootstrap
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Bootstrap 5"
            />
            <SiLeaflet
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Leaflet"
            />
            <SiExpress
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="ExpressJS"
            />
            <FaFontAwesome
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Font Awesome"
            />
            <FaGit
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Git"
            />
            <FaGithub
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
          </p>
        </Link>

        <Link
          to="https://blogger-5ive.onrender.com/"
          target="_blank"
          className="card"
          title="View More"
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={Blog5} alt="Blogger5ive Image" />
            </div>
            <div className="card-back">
              <p>
                Blogger 5ive&copy; <br /> A blog app to share your amazing blogs
              </p>
            </div>
          </div>
          <p>
            <FaReact
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Reactjs"
            />
            <FaNodeJs
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Nodejs"
            />
            <SiExpress
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="ExpressJS"
            />
            <SiFirebase
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Firebase"
            />
            <DiMongodb
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="MongoDB"
            />
            <SiTailwindcss
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Tailwindcss"
            />
            <SiRedux
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Redux"
            />
            <FaFontAwesome
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Font Awesome"
            />
            <FaGit
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Git"
            />
            <FaGithub
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
          </p>
        </Link>

        <Link
          to="https://car-stand-booking.vercel.app/"
          target="_blank"
          className="card"
        >
          <div className="card-inner" title="View More">
            <div className="card-front">
              <img src={CarStand} alt="Car Stand" />
            </div>
            <div className="card-back">
              <p>
                A simple car showroom app using Typescript, RestAPI with search
                and filter parameters
              </p>
            </div>
          </div>
          <p>
            <SiTypescript
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="TypeScript"
            />
            <SiTailwindcss
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Tailwind CSS"
            />
            <SiHeadlessui
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Headless UI"
            />
            <TbApi
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="REST API"
            />
            <FaGit
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Git"
            />
            <FaGithub
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
            <SiVercel
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Vercel"
            />
          </p>
        </Link>

        <Link
          to="https://anthonyemm.github.io/movix-info/"
          target="_blank"
          className="card"
        >
          <div className="card-inner" title="View More">
            <div className="card-front">
              <img src={Movix} alt="Nigerian cooking" />
            </div>
            <div className="card-back">
              <p>
                MovixInfo <br /> App to search for movie and TV series
                information
              </p>
            </div>
          </div>
          <p>
            <FaReact
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Reactjs"
            />
            <TbApi
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="REST API"
            />
            <SiStyledcomponents
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Styled Components"
            />
            <FaCss3
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="CSS3"
            />
            <FaGit
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Git"
            />
            <FaGithub
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
          </p>
        </Link>

        <Link
          to="https://cookbook-wbs.netlify.app/"
          target="_blank"
          className="card"
        >
          <div className="card-inner" title="View More">
            <div className="card-front">
              <img src={Cooking} alt="Nigerian cooking" />
            </div>
            <div className="card-back">
              <p>
                Nigerian Cooking <br /> Showcasing Nigerian recipes (Desktop
                App)
              </p>
            </div>
          </div>
          <p>
            <FaReact
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Reactjs"
            />
            <FaCss3
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="CSS3"
            />
            <SiContentful
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Contentful CMS"
            />
            <SiChakraui
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Chakra UI"
            />
            <FaGit
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Git"
            />
            <FaGithub
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
          </p>
        </Link>

        <Link
          to="https://anthonyemm.github.io/task-mgt/"
          target="_blank"
          className="card"
          title="View More"
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={TaskMgt} alt="TaskMgt Image" />
            </div>
            <div className="card-back">
              <p>
                TaskMgt <br /> To-do List App (Desktop/Mobile)
              </p>
            </div>
          </div>
          <p>
            <FaHtml5
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="HTML5"
            />
            <FaCss3
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="CSS3"
            />
            <FaJs
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="JavaScript"
            />
            <FaGit
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Git"
            />
            <FaGithub
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
          </p>
        </Link>

        <Link
          to="https://whatismyip-lac.vercel.app/"
          target="_blank"
          className="card"
          title="View More"
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={IP} alt="Ip Image" />
            </div>
            <div className="card-back">
              <p>
                What is my IP address? <br />A React.js project to show IP
                address and Map location using IP Geolocation API from ipify.org
                and leaflet Map
              </p>
            </div>
          </div>
          <p>
            <FaReact
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Reactjs"
            />
            <FaCss3
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="CSS3"
            />
            <TbApi
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="REST API"
            />
            <SiLeaflet
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Leaflet"
            />
            <FaGit
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Git"
            />
            <FaGithub
              size={25}
              style={{
                color: "rgb(248, 215, 174)",
                marginLeft: "1rem",
                cursor: "pointer",
              }}
              title="Github"
            />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
