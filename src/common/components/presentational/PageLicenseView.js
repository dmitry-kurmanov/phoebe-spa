import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Group } from '../container/Group';
import styles from './PageLicenseView.css';

export class PageLicenseView extends React.PureComponent {
    componentDidMount() {
        if(!this.props.license) {
            this.props.fetchFileMitLicence();
        }
        if(!this.props.srcCat) {
            this.props.fetchRandomCat();
        }
    }

    render() {
        return (
            <div className = {styles['root']}>
                <Group
                    id = 'mit'
                    caption = {
                        <FormattedMessage id = {PageLicenseView.messages.captionMit}/>
                    }
                >
                    {this.props.license ? (
                        <div
                            className = {styles['mit']}
                            dangerouslySetInnerHTML = {{__html: this.props.license}}
                        />
                    ) : null}
                </Group>

                <Group
                    id = 'cat'
                    caption = {
                        <FormattedMessage id = {PageLicenseView.messages.captionCat}/>
                    }
                >
                    {this.props.srcCat ? (
                        <img
                            onClick = {this.props.fetchRandomCat}
                            className = {styles['img']}
                            src = {this.props.srcCat}
                        />
                    ) : null}
                </Group>
            </div>
        );
    }
}

PageLicenseView.propTypes = {
    license             : React.PropTypes.string,
    srcCat              : React.PropTypes.string,
    fetchFileMitLicence : React.PropTypes.func.isRequired,
    fetchRandomCat      : React.PropTypes.func.isRequired
};

PageLicenseView.messages = {
    captionMit : `${PageLicenseView.name}.captionMit`,
    captionCat : `${PageLicenseView.name}.captionCat`,
};
