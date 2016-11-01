import React from 'react';
import { Link } from 'react-router';
import { to } from '../constants/Routes';
import { FormattedMessage } from 'react-intl';
import styles from './Navigation.css';

export const Navigation = () => (
    <div className = {styles['root']}>
        <Link
            className = {styles['link']}
            activeClassName = {styles['link--active']}
            to = {to.features}
        >
            <FormattedMessage id = {Navigation.messages.features}/>
        </Link>
        <div className = {styles['delimiter']}/>
        <Link
            className = {styles['link']}
            activeClassName = {styles['link--active']}
            to = {to.license}
        >
            <FormattedMessage id = {Navigation.messages.license}/>
        </Link>
        <div className = {styles['delimiter']}/>
        <Link
            className = {styles['link']}
            activeClassName = {styles['link--active']}
            to = {to.details}
        >
            <FormattedMessage id = {Navigation.messages.details}/>
        </Link>
    </div>
);

Navigation.messages = {
    features : `${Navigation.name}.features`,
    license  : `${Navigation.name}.license`,
    details  : `${Navigation.name}.details`,
};