import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Feature } from './Feature';
import { Features } from '../../constants/Features';
import { Messages } from '../../constants/Messages';
import Helmet from 'react-helmet';
import styles from './PageFeatures.css';

function renderFeatures({message, icon, id}, index) {
    return (
        <Feature
            key = {index}
            id = {id}
            icon = {icon}
        >
            <FormattedMessage id = {message}/>
        </Feature>
    );
}

export const PageFeatures = injectIntl(({ intl }) => (
    <div className = {styles['root']}>
        <Helmet title = {intl.formatMessage({id:Messages.PageFeatures})}/>
        {Features.asArray.map(renderFeatures)}
    </div>
));



