import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductJa.css";

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
const hiraganaKMobile = require("../../assets/images/hk.png");
const hiraganaWMobile = require("../../assets/images/hwc.png");
const pureKanjiMobile = require("../../assets/images/pk.png");
const homeIcon = require("../../assets/images/home-icon.png");


const iconImages = [icon1Image, icon3Image, icon2Image, icon4Image];
const appImages = [
  hiraganaImage,
  hiraganaWImage,
  katakanaImage,
  katakanaWImage,
];
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
  "Pure Kanji",
];
const sentences = [
  "ひらがなをサクッと手軽に習得したい人におすすめ。Hiragana Bubblesを使えば、ゲームをプレイするだけでひらがなの形を見分ける力をすばやく簡単に習得し、楽しみながら向上させることができます。基本的なひらがなに加えて「ば」や「ぱ」などの濁音や半濁音といった、学習者がつまづきがちな文字もゲームをプレイするだけで楽しく覚えることができます。まずはこのアプリのゲームに挑戦して、あなたのひらがなの習得度合いをチェックしてみてはいかがでしょうか。",
  "Japanese description テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト",
  "Japanese description テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト",
  "Japanese description テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト"
]

export default function ProductJa() {
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
            <li>JA</li>
            <li>
              <Link to="/product/" className="en-icon">
                {" "}
                EN
              </Link>
            </li>
          </div>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
        </ul>
      </nav>
      <div className="mobile-design-container">
        <div className="box-A">dijipiji mobile design</div>

        <div className="box-B">
          Japanese description
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキスト テキストテキストテキストテキスト
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
          <p className="Product-discription-title-ja">{selectedTitle}</p>
          <p className="Product-discription-text-ja">{selectedSentence}</p>
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
