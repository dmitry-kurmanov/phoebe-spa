import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './LocaleTrigger.css';

export class LocaleTrigger extends React.PureComponent {
    changeLocaleToEN = () => {
        this.props.changeLocale('en');
    };

    changeLocaleToRU = () => {
        this.props.changeLocale('ru');
    };

    render() {
        return (
            <div className = {styles['root']}>
                <div
                    className = {styles['locale'] + ((this.props.locale === 'en') ? (' ' + styles['locale--active']) : '')}
                    onClick = {(this.props.locale === 'en') ? undefined : this.changeLocaleToEN}
                >
                    <FormattedMessage id = {LocaleTrigger.messages.en}/>
                </div>
                {` / `}
                <div
                    className = {styles['locale'] + ((this.props.locale === 'ru') ? (' ' + styles['locale--active']) : '')}
                    onClick = {(this.props.locale === 'ru') ? undefined : this.changeLocaleToRU}
                >
                    <FormattedMessage id = {LocaleTrigger.messages.ru}/>
                </div>
            </div>
        );
    }
}

LocaleTrigger.propTypes = {
    changeLocale : React.PropTypes.func.isRequired,
    locale       : React.PropTypes.oneOf(['en', 'ru']).isRequired
};

LocaleTrigger.messages = {
    en : `${LocaleTrigger.name}.en`,
    ru : `${LocaleTrigger.name}.ru`
};