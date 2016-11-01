import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { MatchWithSubRoutes } from '../../../core/MatchWithSubRoutes';
import { Routes } from '../constants/Routes';

export const App = ({store}) => (
    <Provider store = {store}>
        <IntlProvider>
            <MatchWithSubRoutes routes = {Routes}/>
        </IntlProvider>
    </Provider>
);