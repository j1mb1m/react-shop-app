import React, { useState } from "react";
import LanguageContext from "./language";
import { LOCALES } from "../i18n/locales";

const LanguageState = (props) => {

    const [language, setLanguage] = useState(LOCALES.RUSSIAN);
    const [currency, setCurrency] = useState("USD");

/*     const sendLanguageToParent = (lang) => {
        getLanguage(lang);
    };
    const sendCurrencyToParent = (curr) => {
        getCurrency(curr);
    }; */

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            currency,
            setCurrency
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
}


export default LanguageState;