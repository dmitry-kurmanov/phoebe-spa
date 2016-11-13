import connect from 'react-redux/lib/components/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { LocaleDataActions } from '../../actions/LocaleDataActions';
import { LayoutView } from '../presentational/LayoutView';

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

export const Layout = connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutView);