import React, { useContext, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Card from "../component/Card";
import "../index.scss";
import { Link } from "react-router-dom";
import { LOCALES } from "../i18n/locales";
import { messages } from "../i18n/messages";
import { FormattedMessage, IntlProvider } from 'react-intl';
import catalogItems from "../component/database/catalog-data";

import languageContext from "../context/language";


function Catalog() {
  const { language, setLanguage, currency, setCurrency } = useContext(languageContext);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);

  const addToSizeFilter = (size) => {

    if (sizeFilter.length === 0) {
      setSizeFilter([size]);
    }
    else if (!sizeFilter.includes(size)) {
      setSizeFilter([...sizeFilter, size]);
    }
  };

  const addToColorFilter = (color) => {

    if (colorFilter.length === 0) {
      setColorFilter([color]);
    }
    else if (!colorFilter.includes(color)) {
      setColorFilter([...colorFilter, color]);
    }
    console.log(colorFilter);
  };

  const isIncludeSize = (sizes) => {

    for (let i = 0; i <= sizes.length; i++) {
      if (sizeFilter.includes(sizes[i])) return true;
    }

    return false;
  };

  const isIncludeColor = (colors) => {

    for (let i = 0; i <= colors.length; i++) {
      if (colorFilter.includes(colors[i])) return true;
    }

    return false;
  };
  return (
    <IntlProvider
      messages={messages[language]}
      locale={language}
      defaultLocale={LOCALES.RUSSIAN}>
      <div className="coloredHeader">
        <Header language={language}
          setLanguage={setLanguage}
          currency={currency}
          setCurrency={setCurrency} />
      </div>
      <div className="contentSize currentPage">
        <nav>
          <ul>
            <li><Link to='/'><FormattedMessage id='main' /></Link>
            </li>
            <li>
              <div>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.88906 5L0 1.11094L1.11094 0L6.11094 5L1.11094 10L0 8.88906L3.88906 5Z" fill="#E0BEA2" />
                </svg>
              </div>
            </li>
            <li><Link to='/'><FormattedMessage id='catalog' /></Link>
            </li></ul>
        </nav>
      </div>
      <div className="contentSize catalogContent">
        <div className="menu-right">
          <p><FormattedMessage id="catalog" /></p>
          <ul>
            <li>Bestsellers</li>
            <li><FormattedMessage id='outerwear' /></li>
            <li><FormattedMessage id='fur_coats' /></li>
            <li><FormattedMessage id='trench_coats' /></li>
            <li><FormattedMessage id='coat' /></li>
            <li><FormattedMessage id='down_jackets_and_vests' /></li>
            <li><FormattedMessage id='costumes' /></li>
            <li><FormattedMessage id='jackets' /></li>
            <li><FormattedMessage id='dresses' /></li>
            <li><FormattedMessage id='shirts_and_blouses' /></li>
            <li><FormattedMessage id='skirts' /></li>
            <li><FormattedMessage id='t_shirts_and_tops' /></li>
            <li><FormattedMessage id='accessories' /></li>
            <li>Sale</li>
            <li>Summer</li>
            <li><FormattedMessage id='view_all' /></li>
          </ul>
        </div>
        <div>
          <div className="filter" >
            <ul>
              <li className="dropbox">
                <div>
                  <span><FormattedMessage id='size' />
                    <img className="drift colored_drift" src="img/drift_header.svg" alt="Logo" />
                  </span>
                  <ul>
                    <li onClick={() => addToSizeFilter("XXS")}>XXS</li>
                    <li onClick={() => addToSizeFilter("XS")}>XS</li>
                    <li onClick={() => addToSizeFilter("S")}>S</li>
                    <li onClick={() => addToSizeFilter("M")}>M</li>
                    <li onClick={() => addToSizeFilter("L")}>L</li>
                  </ul>
                </div>
              </li>
              <li className="dropbox">
                <div>
                  <span><FormattedMessage id='color' />
                    <img className="drift colored_drift" src="img/drift_header.svg" alt="Logo" /></span>

                  <ul>
                    <li onClick={() => addToColorFilter("#FFFFFF")}>
                      <div style={{
                        backgroundColor: "#FFFFFF",
                        width: "14px",
                        height: "14px",
                        border: "0.3px solid #252525",
                        marginRight: "5px",
                        borderRadius: "50%",
                        float: "left"
                      }}></div>
                      Белый
                    </li>
                    <li onClick={() => addToColorFilter("#6F83A4")}>
                      <div style={{
                        backgroundColor: "#6F83A4",
                        width: "14px",
                        height: "14px",
                        border: "0.3px solid #252525",
                        marginRight: "5px",
                        borderRadius: "50%",
                        float: "left"
                      }}></div>Сиреневый</li>
                    <li onClick={() => addToColorFilter("#F1DDAA")}>
                      <div style={{
                        backgroundColor: "#F1DDAA",
                        width: "14px",
                        height: "14px",
                        border: "0.3px solid #252525",
                        marginRight: "5px",
                        borderRadius: "50%",
                        float: "left"
                      }}></div>Песочный</li>
                    <li onClick={() => addToColorFilter("red")}>
                      <div style={{
                        backgroundColor: "red",
                        width: "14px",
                        height: "14px",
                        border: "0.3px solid #252525",
                        marginRight: "5px",
                        borderRadius: "50%",
                        float: "left"
                      }}></div>
                      Красный</li>
                  </ul>
                </div>
              </li>
              <li className="dropbox">
                <div>
                  <span><FormattedMessage id='price' />
                    <img className="drift colored_drift" src="img/drift_header.svg" alt="Logo" />
                  </span>
                </div>
              </li>
              <li className="dropbox">
              <div>
                  <span><FormattedMessage id='sort_by' />
                    <img className="drift colored_drift" src="img/drift_header.svg" alt="Logo" />
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="cards">
            {catalogItems.filter((filterItem) =>
              sizeFilter.length > 0 ? isIncludeSize(filterItem.size) : true)
              .filter((filterItem) => colorFilter.length > 0 ? isIncludeColor(filterItem.color) : true)
              .map(item =>
                <Card key={item.id}
                  title={item.title}
                  price={item.price}
                  size={item.size}
                  isNew={item.isNew}
                  colors={item.color}
                  img={item.img}
                />)}
          </div>
        </div>
      </div>

      <Footer />
    </IntlProvider>
  );
}

export default Catalog;