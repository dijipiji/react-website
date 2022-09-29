import React from "react";
import { Link } from "react-router-dom";
// import ScrollComponent from "../../components/ScrollComponent/ScrollComponent"
import "./About.css";
const homeIcon = require("../../assets/images/home-icon.png");
const Jam = require("../../assets/images/jam.png");
const Zan = require("../../assets/images/zan.png");
const Meg = require("../../assets/images/meg.png");

const aboutProfile = [
  {
    img: Jam,
    url: "https://dijipiji.com/jam/index.html",
    title: "Jam",
  },
  {
    img: Zan,
    url: "https://dijipiji.com/zan/index.html",
    title: "Zan",
  },
  {
    img: Meg,
    url: "https://megan-sen.netlify.app",
    title: "Meg",
  },
];

export default function About() {
  return (
    <>
      <nav>
        <ul className="page-about-nav">
          <li>
            <Link to="/">
              <img className="home-icon" src={homeIcon} alt="home-icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <p className="about">dijipiji is ...</p>
      <div className="about-container">
        {aboutProfile.map((profile) => (
          <div className="profile-box">
            <img className="profile-img" src={profile.img} alt="profile"></img>
            <p className="profile-title">{profile.title}</p>
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              Find out more
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
