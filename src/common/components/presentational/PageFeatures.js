import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Feature } from './Feature';
import { Features } from '../../constants/Features';
import styles from './PageFeatures.css';

export const PageFeatures = () => (
    <div className = {styles['root']}>
        {Features.asArray.map(
            ({message, icon, id}, index) => (
                <Feature
                    key = {index}
                    id = {id}
                    icon = {icon}
                >
                    <FormattedMessage id = {message}/>
                </Feature>
            )
        )}
    </div>
);



