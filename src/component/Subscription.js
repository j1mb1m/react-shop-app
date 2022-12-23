import { FormattedMessage } from 'react-intl';

function Subscription() {
    return (

        <div className="contentSize subscription">
            <h2>
                <FormattedMessage id='subscriptions_title' />
            </h2>
            <form action="">
                <FormattedMessage id='subscriptions_your_email'>
                    {placeholder => (<input placeholder={placeholder} id="email" />)}
                </FormattedMessage>
                <button><FormattedMessage id='subscriptions_subscribe' /></button>
                <p><FormattedMessage id='subscriptions_agree' />
                </p>
            </form>

        </div >
    );
}

export default Subscription;
