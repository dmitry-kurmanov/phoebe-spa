import React from 'react';
import Provider from 'react-redux/lib/components/Provider';
import IntlProvider from 'react-intl-redux/lib/components/IntlProvider';
import { MatchWithSubRoutes } from '../../../../core/MatchWithSubRoutes';
import { CoreHistory } from '../../../../core/CoreHistory';

export class App extends React.PureComponent {
    componentDidMount() {
        this.props.store.dispatch(
            CoreHistory.actions.connect(this.context.history)
        );
    }

    componentWillUnmount() {
        this.props.store.dispatch(
            CoreHistory.actions.disconnect()
        );
    }

    render() {
        const { store, routes } = this.props;
        return (
            <Provider store = {store}>
                <IntlProvider>
                    <MatchWithSubRoutes routes = {routes}/>
                </IntlProvider>
            </Provider>
        );
    }
}

App.propTypes = {
    store  : React.PropTypes.object.isRequired,
    routes : React.PropTypes.array.isRequired,
};

App.contextTypes = {
    history : React.PropTypes.object
};
