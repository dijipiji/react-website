import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductJa.css";

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
// const appStoreIcon = require("../../assets/images/app-store-icon.png");

const iconImages = [icon1Image, icon3Image, icon2Image, icon4Image];
const iconImagesLink = [
  "https://apps.apple.com/app/hiragana-bubbles/id324020166",
  "https://apps.apple.com/app/hiragana-krush/id1264182156",
  "https://apps.apple.com/app/hiragana-writing-challenge/id317183948",
  "https://apps.apple.com/app/pure-kanji/id576232844",
];
const appImages = [
  app1Image,
  app2Image,
  app3Image,
  app4Image,
];
const mobileImages = [
  hiraganaMobile,
  hiraganaWMobile,
  hiraganaKMobile,
  pureKanjiMobile,
];

const title = [
  "Hiragana Bubbles（ひらがなバブル）",
  "Hiragana Writing Challenge（ひらがなライティングチャレンジ）",
  "Hiragana Krush（ひらがなクラッシュ）",
  "Pure Kanji（ピュア漢字）",
];
const sentences = [
  "ひらがなを短時間で手軽に習得したい人におすすめのアプリです。ひらがなバブルを使えば、ゲームを楽しみながらひらがなの形を見分ける力をすばやく習得することができます。基本的なひらがなに加えて、「ば」や「ぱ」などの濁音や半濁音といった学習者がつまづきがちな文字もゲームを通して覚えることができます。一度ダウンロードすればインターネットは必要ありません。広告表示が一切ないため、安心してお子様にもご利用いただけます。",
  "日本語学習者にひらがなの美しさを体感いただけるよう、シンプルで洗練された和を感じるデザインに仕上げました。ひらがなの音声ガイダンスにそって、ヒントを頼りに正しい書き順と美しいバランスでひらがなを書く力を習得できます。一度ダウンロードすればインターネットは必要ありません。広告表示が一切ないため、お子様にも安心してご利用いただけます。",
  "ひらがなクラッシュであなたの”ひらがな脳”を鍛えましょう。人気のクラッシュゲームをひらがなで楽しみながら、ひらがなの形を覚えることができるアプリです。一度ダウンロードすればインターネットは必要ありません。広告表示が一切ないため、お子様にも安心してご利用いただけます。",
  "英語話者向けの日本語学習アプリ、ピュア漢字は2000種類以上の漢字の意味とニュアンスを理解するのに最適な辞書です。一度ダウンロードすればインターネットは必要ありません。広告表示が一切ないため、ストレスなく安心してお使いいただけます。",
];

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
          わたしたち株式会社dijipiji（ディジピジ）は、2009年の夏に最初のアプリケーションを発売して以来、イギリスを拠点に数々のiOSアプリをつくり続けています。
          ご購入されたアプリを長くご利用いただけるよう、常にiOSの最新バージョンへのアップデートとメンテナンスの継続を約束いたします。今後のサービス向上のため、皆さまからのご意見・ご感想をお待ちしております。
        </div>

        <div className="box-C">
          <div className="AppStore-title-box">
            <p className="AppStore-title">Download from the</p>
            <p className="AppStore-title2">iTunes App Store</p>
            {/* <img className="app-store-icon-img" src={appStoreIcon} alt="img" /> */}
          </div>
          <div className="icon-img-container">
            <div>
              {iconImages.map((item, index) => (
                <a
                  href={iconImagesLink[index]}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    key={item.toString()}
                    className="AppIcon-img"
                    src={item}
                    alt={item}
                  />
                </a>
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
