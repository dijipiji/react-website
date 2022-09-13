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
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
