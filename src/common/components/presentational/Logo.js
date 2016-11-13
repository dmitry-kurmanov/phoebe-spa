import React from 'react';
import styles from './Logo.css';

export const Logo = () => (
    <div className = {styles['root']}>
        <div className = {styles['name']}>
            phoebe-
        </div>
        <div className = {styles['name'] + ' ' + styles['name--colored']}>
            spa
        </div>
    </div>
);