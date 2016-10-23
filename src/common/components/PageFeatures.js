import React from 'react';
import { Feature } from './Feature';
import styles from './PageFeatures.css';
import { Features } from '../constants/Features';

const featuresAsArray = Object.values(Features);

export const PageFeatures = () => (
    <div className = {styles['root']}>
        {featuresAsArray.map(
            (id, index) => (
                <Feature.Card
                    key = {index}
                    id = {id}
                />
            )
        )}
    </div>
);




