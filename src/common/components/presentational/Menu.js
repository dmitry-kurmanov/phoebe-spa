import React from 'react';
import { Navigation } from './Navigation';
import { Logo } from './Logo';
import { LocaleTrigger } from './LocaleTrigger';
import styles from './Menu.css';

export const Menu = ({ locale, changeLocale }) => (
    <div className = {styles['root']}>
        <div className = {styles['top-bar']}/>
        <div className = {styles['container']}>
            <Logo/>
            <Navigation/>
            <LocaleTrigger
                locale = {locale}
                changeLocale = {changeLocale}
            />
        </div>
    </div>
);

Menu.propTypes = {
    locale       : React.PropTypes.oneOf(['en', 'ru']).isRequired,
    changeLocale : React.PropTypes.func.isRequired,
};