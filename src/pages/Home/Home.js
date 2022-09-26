import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div id="bgLogo"></div>
      <div id="introText">
        <h1>Creative technology</h1>
        <h2>Digital design & development</h2>
      </div>
      <nav>
        <ul className="page-home-nav">
          <li className="home-link">
            <a target="_blank" href="https://dijipiji.com/services/index.html">
              Service
            </a>
          </li>
          <li className="home-link">
            <Link to="/about">About</Link>
          </li>
          <li className="home-link">
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
