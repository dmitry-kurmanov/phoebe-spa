import React from 'react';
import connect from 'react-redux/lib/components/connect';
import { GroupView } from '../presentational/GroupView';

export function mapStateToProps(state) {
    return {
        pathname : state.history.pathname
    };
}

export const Group = connect(mapStateToProps)(GroupView);

Group.propTypes = {
    id : React.PropTypes.string.isRequired,
    caption : React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.node
    ]).isRequired,
    children     : React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};