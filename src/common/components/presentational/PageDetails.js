import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Features } from '../../constants/Features';
import { Group } from '../container/Group';
import styles from './PageDetails.css';

function FeatureDetails({id, message, details : Details}, index) {
    return (
        <Group
            key = {index}
            id = {id}
            caption = {
                <FormattedMessage id = {message}/>
            }
        >
            <Details/>
        </Group>
    );
}

export const PageDetails = () => (
    <div className = {styles['root']}>
        {Features.asArray.map(FeatureDetails)}
    </div>
);
