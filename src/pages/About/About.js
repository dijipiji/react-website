import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./About.css";
const homeIcon = require("../../assets/images/home-icon.png");

export default function About() {
  return (
    <>
      <nav>
        <ul className="page-about-nav">
          <li>
            <Link to="/"><img className="home-icon" src={homeIcon} alt="home-icon" /></Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
      <p className="about">About</p>
    </>
  );
}
