import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PageLicense } from '../components/PageLicense';
import { StaticFileActions } from '../actions/StaticFileActions';
import { CatActions } from '../actions/CatActions';

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

export const PageLicenseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageLicense);

PageLicenseContainer.fetchData = (store, props) => {
    return Promise.resolve();
};