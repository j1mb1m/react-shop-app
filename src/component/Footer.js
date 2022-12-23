import { React } from "react";
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";


function Footer(props) {
  return (
      <footer className="contentSize">
        <div className="wrap">
          <ul>
            <li><FormattedMessage id='company' /><img src="./img/drift.svg" alt="open" /></li>
            <li><Link to='/contacts'><FormattedMessage id='about' /></Link></li>
            <li><FormattedMessage id='contacts' /></li>
          </ul>
          <ul>
            <li><FormattedMessage id='useful' /><img src="./img/drift.svg" alt="open" /></li>
            <li><FormattedMessage id='payment_and_delivery' /></li>
            <li><FormattedMessage id='terms_of_return' /></li>
            <li><FormattedMessage id='bonus_system' /></li>
          </ul>
          <ul>
            <li><FormattedMessage id='buyer' /><img src="./img/drift.svg" alt="open" /></li>
            <li><FormattedMessage id='favorites' /></li>
            <li><FormattedMessage id='public_offer' /></li>
            <li><FormattedMessage id='privacy_policy' /></li>
          </ul>
          <ul>
            <li><FormattedMessage id='contacts' /><img src="./img/drift.svg" alt="open" /></li>
            <li><span>
              <img src="./img/logo_insta.svg" alt="Instagram" />
              <img src="./img/logo_twitter.svg" alt="Twitter" />
            </span></li>
            <li>+38(073) 096 36 44</li>
            <li>info@yanki.com</li>
          </ul>
        </div>
        <div>©️ 2021 Yanki. All rights reserved</div>
      </footer>
  );
}

export default Footer;
