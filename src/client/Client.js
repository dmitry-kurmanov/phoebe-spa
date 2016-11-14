import React from 'react';
import ReactDOM from 'react-dom';
import cookies from 'cookies-js';
import Immutable from 'seamless-immutable';
import BrowserRouter from 'react-router/BrowserRouter';
import { routes } from '../common/routes';
import { App } from '../common/components/container/App';
import { store } from '../common/store';
import { api } from '../common/api';
import { LocaleDataActions } from '../common/actions/LocaleDataActions';
console.log(33);
export class Client {
    static main() {
        const node = document.getElementById('app');
        const client = new Client(node, Immutable(window.STATE), cookies);
        return client;
    }

    getStore(initialState:{[name:string]:any}, cookies) {
        const baseUrl = '';
        const getAuthorizationHeader = () => `Bearer ${cookies.get('access_token')}`;
        const extraArguments = {
            cookies,
            api : api(baseUrl, getAuthorizationHeader)
        };
        return store(initialState, extraArguments);
    };

    constructor(node, initialState, cookies) {
        const store = this.getStore(initialState, cookies);
        const locale = Object.keys(initialState.localeData)[0];
        const { messages, rules } = initialState.localeData[locale];
        store.dispatch(LocaleDataActions.updateComplete(locale, rules, messages, true));
        ReactDOM.render((
            <BrowserRouter>
                <App
                    store = {store}
                    routes = {routes(store, cookies)}
                />
            </BrowserRouter>
        ), node);
    }
}