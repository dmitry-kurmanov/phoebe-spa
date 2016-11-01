import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Routes, to } from '../constants/Routes';
import { Features } from '../constants/Features';
import styles from './Feature.css';

export const Feature = () => null;

Feature.Card = ({ id }) => (
    <Link
        to = {{
            pathname: to.details,
            hash: Feature.anchors[id]
        }}
        className = {styles['card']}
    >
        <div className = {styles['container']}>
            <div className = {styles['sub-container']}>
                <div className = {styles['icon-container']}>
                    <i className = {'fa ' + Feature.icons[id] + ' ' + styles['icon']}/>
                </div>
                <div className = {styles['text-container']}>
                    <FormattedMessage id = {Feature.messages[id]}/>
                </div>
            </div>
        </div>
    </Link>
);

Feature.Card.propTypes = {
    id : React.PropTypes.string.isRequired
};

Feature.Details = ({id, children}) => (
    <div
        id = {id}
        className = {styles['details']}
    >
        <div className = {styles['caption']}>
            <FormattedMessage id = {Feature.messages[id]}/>
        </div>
        {children}
    </div>
);

Feature.Details.propTypes = {
    id       : React.PropTypes.string.isRequired,
    children : React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

Feature.messages = {
    [Features.ecma]          : `Features.ecma`,
    [Features.reactAndRedux] : `Features.reactAndRedux`,
    [Features.reactRouter]   : `Features.reactRouter`,
    [Features.webpack]       : `Features.webpack`,
    [Features.watch]         : `Features.watch`,
    [Features.restart]       : `Features.restart`,
    [Features.cssModules]    : `Features.cssModules`,
    [Features.manyLoaders]   : `Features.manyLoaders`,
    [Features.intl]          : `Features.intl`,
    [Features.fetchData]     : `Features.fetchData`,
    [Features.test]          : `Features.test`,
    [Features.coverage]      : `Features.coverage`,
    [Features.linter]        : `Features.linter`,
    [Features.flow]          : `Features.flow`,
    [Features.mit]           : `Features.mit`,
};

Feature.icons = {
    [Features.ecma]          : 'fa-pencil-square-o',
    [Features.reactAndRedux] : 'fa-cogs',
    [Features.reactRouter]   : 'fa-sitemap',
    [Features.webpack]       : 'fa-cubes',
    [Features.watch]         : 'fa-eye',
    [Features.restart]       : 'fa-refresh',
    [Features.cssModules]    : 'fa-magic',
    [Features.manyLoaders]   : 'fa-file-text-o',
    [Features.intl]          : 'fa-language',
    [Features.fetchData]     : 'fa-cloud-download',
    [Features.test]          : 'fa-check-square-o',
    [Features.coverage]      : 'fa-list-alt',
    [Features.linter]        : 'fa-leaf',
    [Features.flow]          : 'fa-code',
    [Features.mit]           : 'fa-users',
};

Feature.anchors = {
    [Features.ecma]          : 'ecma',
    [Features.reactAndRedux] : 'react-and-redux',
    [Features.reactRouter]   : 'react-router',
    [Features.webpack]       : 'webpack',
    [Features.watch]         : 'watch',
    [Features.restart]       : 'restart',
    [Features.cssModules]    : 'css-modules',
    [Features.manyLoaders]   : 'many-loaders',
    [Features.intl]          : 'intl',
    [Features.fetchData]     : 'fetch-data',
    [Features.test]          : 'test',
    [Features.coverage]      : 'coverage',
    [Features.linter]        : 'linter',
    [Features.flow]          : 'flow',
    [Features.mit]           : 'mit',
};