import React from 'react';
import Link from 'react-router/Link';
import { scrollTo } from '../../../../core/scrollTo';
import styles from './GroupView.css';

export class GroupView extends React.PureComponent {
    scrollToId = () => {
        scrollTo(this.props.id);
    };

    render() {
        const { pathname, id, children, caption } = this.props;
        return (
            <div className = {styles['root']}>
                <Link
                    className = {styles['caption']}
                    to = {{
                        pathname,
                        hash : id
                    }}
                    id = {id}
                    onClick = {this.scrollToId}
                >
                    {caption}
                </Link>
                {children}
            </div>
        );
    }
}

GroupView.propTypes = {
    pathname : React.PropTypes.string.isRequired,
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