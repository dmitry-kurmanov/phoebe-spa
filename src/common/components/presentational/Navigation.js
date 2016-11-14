import React from 'react';
import Link from 'react-router/Link';
import { Messages } from '../../constants/Messages';
import { routes } from '../../routes';
import { FormattedMessage } from 'react-intl';
import styles from './Navigation.css';

export const Navigation = () => (
    <div className = {styles['root']}>
        <Link
            className = {styles['link']}
            activeClassName = {styles['link--active']}
            to = {routes.features}
        >
            <FormattedMessage id = {Messages.PageFeatures}/>
        </Link>
        <div className = {styles['delimiter']}/>
        <Link
            className = {styles['link']}
            activeClassName = {styles['link--active']}
            to = {routes.license}
        >
            <FormattedMessage id = {Messages.PageLicense}/>
        </Link>
        <div className = {styles['delimiter']}/>
        <Link
            className = {styles['link']}
            activeClassName = {styles['link--active']}
            to = {routes.details}
        >
            <FormattedMessage id = {Messages.PageDetails}/>
        </Link>
    </div>
);