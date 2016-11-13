import connect from 'react-redux/lib/components/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { StaticFileActions } from '../../actions/StaticFileActions';
import { CatActions } from '../../actions/CatActions';
import { PageLicenseView } from '../presentational/PageLicenseView';

export function mapStateToProps(state) {
    const locale = state.intl.locale;
    const licenseName = `MIT-${locale}`;
    return {
        license : state.staticFile[licenseName] ? state.staticFile[licenseName].file : '',
        srcCat : state.cat.url
    };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchFileMitLicence : StaticFileActions.fetchFileMitLicence,
        fetchRandomCat      : CatActions.fetchRandomCat
    }, dispatch);
}

export const PageLicense = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageLicenseView);

PageLicense.fetchData = (store, props) => {
    return Promise.resolve();
};