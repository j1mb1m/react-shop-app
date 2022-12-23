import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import Footer from "../component/Footer";
import Header from '../component/Header';
import Subscription from '../component/Subscription';
import { LOCALES } from "../i18n/locales";
import { messages } from "../i18n/messages";
import { FormattedMessage, IntlProvider } from 'react-intl';

import '../index.scss';
import languageContext from "../context/language";

function Contacts() {
    const { language } = useContext(languageContext);

    return (
        <IntlProvider
            messages={messages[language]}
            locale={language}
            defaultLocale={LOCALES.RUSSIAN}>
            <div className="coloredHeader">
                <Header />
            </div>
            <div className="contentSize currentPage">
                <ul>
                    <li>
                        <Link to="/"><FormattedMessage id="main" /></Link></li>
                    <li>
                        <div><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.88906 5L0 1.11094L1.11094 0L6.11094 5L1.11094 10L0 8.88906L3.88906 5Z" fill="#E0BEA2" />
                        </svg></div>
                    </li>
                    <li>
                        <Link to="/contacts"><FormattedMessage id='contacts' /></Link>
                    </li></ul>
            </div>
            <div className="contentSize catalogContent">

                <div className="menu-right full_width">
                    <p><FormattedMessage id="contact_us" /></p>
                    <ul className="horizontally">
                        <li>
                            <ul>
                                <li><FormattedMessage id="in_social_networks" /></li>
                                <li><span>
                                    <img src="./img/logo_insta.svg" alt="Instagram" />
                                    <img src="./img/logo_twitter.svg" alt="Twitter" />
                                </span></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>По телефону</li>
                                <li>+38(067) 158 82 66</li>
                                <li>+38(073) 226 39 81</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>По почте</li>
                                <li>example@gmail.com</li>
                            </ul></li>
                        <li>   <ul>
                            <li>Наш офис</li>
                            <li>г. Киев, улица Батумская, 18</li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <Subscription language={language} />
            <Footer language={language} />
        </IntlProvider>
    );
}

export default Contacts;
