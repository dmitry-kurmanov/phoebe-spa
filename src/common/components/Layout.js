import React from 'react';
import { Menu } from './Menu';
import styles from './Layout.css';

export const Layout = ({ locale, changeLocale, children }) => (
    <div className = {styles['root']}>
        <Menu
            locale = {locale}
            changeLocale = {changeLocale}
        />
        {children}
    </div>
);

Layout.propTypes = {
    locale       : React.PropTypes.oneOf(['en', 'ru']).isRequired,
    changeLocale : React.PropTypes.func.isRequired,
    children     : React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};