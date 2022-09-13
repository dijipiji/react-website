import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Product.css";

// const appImage = require("../../assets/images/app.png");
const icon1Image = require("../../assets/images/hb-icon.png");
const icon2Image = require("../../assets/images/kb-icon.png");
const icon3Image = require("../../assets/images/hwc-icon.png");
const icon4Image = require("../../assets/images/kwc-icon.png");
const hiraganaImage = require("../../assets/images/hiraganabubbles.png");
const katakanaImage = require("../../assets/images/katakanabubbles.png");
const hiraganaWImage = require("../../assets/images/hiraganawriting.png");
const katakanaWImage = require("../../assets/images/katakanawriting.png");
const hiraganaMobile = require("../../assets/images/hb.png");
const katakanaMobile = require("../../assets/images/kb.png");
const hiraganaWMobile = require("../../assets/images/hwc.png");
const katakanaWMobile = require("../../assets/images/kwc.png");
const homeIcon = require("../../assets/images/home-icon.png");

const iconImages = [icon1Image, icon2Image, icon3Image, icon4Image];
const appImages = [
  hiraganaImage,
  katakanaImage,
  hiraganaWImage,
  katakanaWImage,
];
const mobileImages = [
  hiraganaMobile,
  katakanaMobile,
  hiraganaWMobile,
  katakanaWMobile,
];

const sentences = [
  "a",
  "b",
  "c",
  "d",
];

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(mobileImages[0]);
  const [selectedSentence, setSelectedSentence] = useState(sentences[0]);
  
  return (
    <div>
      <nav>
        <ul className="page-product-nav">
          <li>
            <Link to="/">
              <img className="home-icon" src={homeIcon} alt="home-icon" />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="mobile-design-container">
        <div className="box-A">dijipiji mobile design</div>

        <div className="box-B">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident
        </div>

        <div className="box-C">
          <div className="AppStore-title-box">
            <p className="AppStore-title">Download from the</p>
            <p className="AppStore-title2">iTunes App Store</p>
          </div>
          <div className="icon-img-container">
            <div>
              {iconImages.map((item) => (
                <img
                  key={item.toString()}
                  className="AppIcon-img"
                  src={item}
                  alt={item}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="box-E">Products</div>
        <div className="box-D">
          <img className="mobile-img" src={selectedImg} alt="img" />
        </div>

        <div className="box-F">
          <p className="Product-discription-title">Hiragana Bubbles</p>
          <p className="Product-discription-text">
            {selectedSentence}
          </p>
        </div>

        <div className="box-G">
          <div>
            {appImages.map((item, index) => (
              <img
                key={index}
                className="App-img"
                src={item}
                alt={item}
                onClick={()=>{
                  setSelectedImg(mobileImages[index]);
                  setSelectedSentence(sentences[index]);
                }}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
