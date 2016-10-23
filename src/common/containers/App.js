import React from 'react';
import { Match, Miss, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { RoutesProvider, MatchWithRoutes } from 'react-router-addons-routes';
import { LayoutContainer } from './LayoutContainer';
import { PageFeatures } from '../components/PageFeatures';
import { PageDetails } from '../components/PageDetails';
import { PageLicenseContainer } from './PageLicenseContainer';
import { Routes } from '../constants/Routes';

export const App = ({store}) => (
    <Provider store = {store}>
        <IntlProvider>
            <LayoutContainer>
                <RoutesProvider routes = {Routes}>
                    <span>
                        {Routes.map(route => (
                            <MatchWithRoutes {...route}/>
                        ))}
                    </span>
                </RoutesProvider>
                <Miss render={()=>(
                    <Redirect to = {Routes.features.pattern}/>
                )}/>
            </LayoutContainer>
        </IntlProvider>
    </Provider>
);