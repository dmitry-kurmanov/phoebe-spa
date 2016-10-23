import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from '../components/Layout';
import { LocaleDataActions } from '../actions/LocaleDataActions';

export function mapStateToProps(state) {
    return {
        locale : state.intl.locale
    };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeLocale : LocaleDataActions.update
    }, dispatch);
}

export const LayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);