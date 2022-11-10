import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

// const appImage = require("../../assets/images/app.png");
const icon1Image = require("../../assets/images/icon-hb.png");
const icon2Image = require("../../assets/images/icon-hwc.png");
const icon3Image = require("../../assets/images/icon-kk.png");
const icon4Image = require("../../assets/images/icon-pk.png");
const app1Image = require("../../assets/images/panel-hb.png");
const app2Image = require("../../assets/images/panel-hwc.png");
const app3Image = require("../../assets/images/panel-kk.png");
const app4Image = require("../../assets/images/panel-pk.png");
const hiraganaMobile = require("../../assets/images/hb.png");
const hiraganaKMobile = require("../../assets/images/hk.png");
const hiraganaWMobile = require("../../assets/images/hwc.png");
const pureKanjiMobile = require("../../assets/images/pk.png");
const homeIcon = require("../../assets/images/home-icon.png");

const iconImages = [icon1Image, icon3Image, icon2Image, icon4Image];
const appImages = [app1Image, app2Image, app3Image, app4Image];
const mobileImages = [
  hiraganaMobile,
  hiraganaWMobile,
  hiraganaKMobile,
  pureKanjiMobile,
];

const title = [
  "Hiragana Bubbles",
  "Hiragana Writing Challenge",
  "Hiragana Krush",
  "Pure Kanji"
];
const sentences = [
  "Learn Hiragana fast and easily Hiragana Bubbles is a fun way to test your expertise and mastery of Hiragana. Learning basic character recognition is quick and easy with this App. Through playing the game you will reinforce and improve your visual recognition of written Japanese.",
  "This application aims to help students of Japanese with their knowledge of Hiragana. The beautiful stroke order animations will help students appreciate the artistry of Japanese writing.The application allows for on screen touch writing and voice pronunciation followed by re-inforcement of learning through individual stroke order animation.",
  "Train your kana-brain. Improve your kana recognition as you journey through all the characters of Hiragana and Katakana. Switch and match your way through fun levels and discover some Japanese words on the way. Discover fun Japanese emoji as you move through the levels and you progress through the kana",
  "Master your kanji with Pure Kanji - the kanji app that you will want to look at and learn from. Pure Kanji contains JLPT sets 1-4 and is easy to use, quick to pick up and put down. Fast access to over 2000 Kanjis with no internet connection required."
];

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(mobileImages[0]);
  const [selectedSentence, setSelectedSentence] = useState(sentences[0]);
  const [selectedTitle, setSelectedTitle] = useState(title[0]);
  
  return (
    <div>
      <nav>
        <ul className="page-product-nav">
          <div>
            <li>
              <Link to="/">
                <img className="home-icon" src={homeIcon} alt="home-icon" />
              </Link>
            </li>
          </div>
          <div className="lan-icons">
            <li>
              <Link to="/product/ja" className="ja-icon">
                JA
              </Link>
            </li>
            <li>EN</li>
          </div>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </nav>
      <div className="mobile-design-container">
        <div className="box-A">dijipiji mobile design</div>

        <div className="box-B">
          We’ve been building iOS apps since the early days of the App Store
          with our first released app in the Summer 2009 for iOS 3. From that
          point on we’ve never looked back and have consistently kept our apps
          up to date with the latest versions of iOS. We promise to continue our
          support and welcome any ideas or feedback that you might have.
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
          <p className="Product-discription-title">{selectedTitle}</p>
          <p className="Product-discription-text">{selectedSentence}</p>
        </div>

        <div className="box-G">
          <div>
            {appImages.map((item, index) => (
              <img
                key={index}
                className="App-img"
                src={item}
                alt={item}
                onClick={() => {
                  setSelectedImg(mobileImages[index]);
                  setSelectedTitle(title[index]);
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
