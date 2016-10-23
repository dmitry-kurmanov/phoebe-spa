import React from 'react';
import styles from './PageLicense.css';
import { FormattedMessage } from 'react-intl';

export class PageLicense extends React.PureComponent {
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
                <div className = {styles['caption']}>
                    <FormattedMessage id = {PageLicense.messages.captionMit}/>
                </div>
                {this.props.license ? (
                    <div
                        className = {styles['mit']}
                        dangerouslySetInnerHTML = {{__html: this.props.license}}
                    />
                ) : null}
                <div className = {styles['caption']}>
                    <FormattedMessage id = {PageLicense.messages.captionCat}/>
                </div>
                {this.props.srcCat ? (
                    <img
                        className = {styles['img']}
                        src = {this.props.srcCat}
                    />
                ) : null}
            </div>
        );
    }
}

PageLicense.propTypes = {
    license             : React.PropTypes.string,
    srcCat              : React.PropTypes.string,
    fetchFileMitLicence : React.PropTypes.func.isRequired,
    fetchRandomCat      : React.PropTypes.func.isRequired
};

PageLicense.messages = {
    captionMit : `${PageLicense.name}.captionMit`,
    captionCat : `${PageLicense.name}.captionCat`,
};