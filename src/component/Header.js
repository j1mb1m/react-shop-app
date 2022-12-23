import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { LOCALES } from "../i18n/locales";
import { FormattedMessage } from 'react-intl';
import languageContext from "../context/language";


function Header() {

  const { language, setLanguage, currency, setCurrency } = useContext(languageContext);
  
  return (
    <>
        <header>
          <div className="contentSize menu">
            <img className="burger" src="img/burger.svg" alt="Burger" />

            <nav>
              <Link to='/'>New</Link>
              <Link to='/catalog'><FormattedMessage id='catalog' /></Link>
              <Link to='/contacts'><FormattedMessage id='about' /></Link>
            </nav>

            <img className="logo" src="img/YANKI.svg" alt="Logo" />

            <ul className="countrySettings">
              <li>
                <div>{language}
                  <img className="drift" src="img/drift_header.svg" alt="Logo" />
                </div>
                <ul>
                  <li onClick={() => setLanguage(LOCALES.ENGLISH)} >{LOCALES.ENGLISH}</li>
                  <li onClick={() => setLanguage(LOCALES.RUSSIAN)} >{LOCALES.RUSSIAN}</li>
                </ul>
              </li>
              <li><div>{currency}
                <img className="drift" src="img/drift_header.svg" alt="Logo" />
              </div>
                <ul>
                  <li onClick={() => setCurrency('USD')} >USD</li>
                  <li onClick={() => setCurrency('BYN')} >BYN</li>
                  <li onClick={() => setCurrency('UAH')} >UAH</li>
                </ul>
              </li>
            </ul>

            <ul className="userService">
              <li><a href='/'><img src="img/search.svg" alt="Search" /></a></li>
              <li><a href='/'><img src="img/user.svg" alt="User" /></a></li>
              <li><a href='/'><img src="img/favorite.svg" alt="Favorite" /></a></li>
              <li><a href='/'><img src="img/basket.svg" alt="Basket" /></a></li>
            </ul>

          </div>

        </header>
    </>
  );
}

export default Header;