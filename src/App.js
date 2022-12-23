import React, { useContext } from "react";
import Footer from "./component/Footer";
import Subscription from "./component/Subscription";
import Header from './component/Header';
import { Link } from 'react-router-dom';
import MyCarousel from './component/CategoryCarousel';
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { FormattedMessage, IntlProvider } from 'react-intl';
import languageContext from "./context/language";



function App(props) {
  const { language, setLanguage, currency, setCurrency } = useContext(languageContext);

  return (
    <>
      <IntlProvider
        messages={messages[language]}
        locale={language}
        defaultLocale={LOCALES.RUSSIAN}>
        <div className="headerBackground ">
          <div className="contentSize title" >
            <p><FormattedMessage id='new_collection' /></p>
            <div></div>
            <Link to="/catalog"><FormattedMessage id='watch_collection' /> <img src="./img/drift_header.svg" alt="open" /></Link>
          </div>
          <Header language={language}
            setLanguage={setLanguage} 
            currency={currency}
           setCurrency={setCurrency}  />
        </div>
        <div className="contentSize category">
          <h2>
            <FormattedMessage id='category' />
          </h2>
          <MyCarousel language={language} />
        </div>

        <Subscription language={language} />
        <Footer language={language} />
      </IntlProvider>
    </>
  );
}

export default App;
