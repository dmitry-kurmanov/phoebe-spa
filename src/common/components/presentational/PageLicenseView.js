import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Group } from '../container/Group';
import { Messages } from '../../constants/Messages';
import Helmet from 'react-helmet';
import styles from './PageLicenseView.css';

@injectIntl
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
                <Helmet title = {this.props.intl.formatMessage({id:Messages.PageLicense})}/>
                <Group
                    id = 'mit'
                    caption = {
                        <FormattedMessage id = {Messages.PageLicenseCaptionMit}/>
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
                        <FormattedMessage id = {Messages.PageLicenseCaptionCat}/>
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
