import React from 'react';
import ReactDOM from 'react-dom';
import cookies from 'cookies-js';
import Immutable from 'seamless-immutable';
import { BrowserRouter } from 'react-router';
import { App } from '../common/components/App';
import { store } from '../common/store/index';
import { LocaleDataActions } from '../common/actions/LocaleDataActions';
import { api } from '../common/api';

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
                <App store = {store}/>
            </BrowserRouter>
        ), node);
    }
}