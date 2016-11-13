import React from 'react';
import Link from 'react-router/Link';
import { NamedLinks } from '../../routes/NamedLinks';
import styles from './Feature.css';

export const Feature = ({ id, icon, children }) => (
    <Link
        to = {{
            pathname: NamedLinks.details,
            hash: id
        }}
        className = {styles['card']}
    >
        <div className = {styles['container']}>
            <div className = {styles['sub-container']}>
                <div className = {styles['icon-container']}>
                    <i className = {'fa ' + icon + ' ' + styles['icon']}/>
                </div>
                <div className = {styles['text-container']}>
                    {children}
                </div>
            </div>
        </div>
    </Link>
);

Feature.propTypes = {
    id       : React.PropTypes.string.isRequired,
    icon     : React.PropTypes.string.isRequired,
    children : React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

