import React from 'react';
import ReactDOM from 'react-dom/server';
import Immutable from 'seamless-immutable';
import express from 'express';
import Helmet from 'react-helmet';
import Cookies from 'cookies';
import url from 'url';
import catApi from 'cat-api';
import { ServerRouter, createServerRenderContext } from 'react-router';
import { store } from '../common/store';
import { messages } from './internationalize/messages';
import { rules } from './internationalize/rules';
import { api } from '../common/api';
import { routes } from '../common/routes';
import { CoreHistory } from '../../core/CoreHistory';
import { App } from '../common/components/container/App';
import { matchPatternAndFetchData} from '../../core/matchPatternAndFetchData';

export class Server {
    static main() {
        const server = new Server();
        server.app.listen(process.env.PORT, process.env.HOSTNAME);
        return server;
    }

    constructor() {
        const app = this.app = express();
        app.use(express.static('bin/static'));
        app.use(express.static('static'));
        app.use('/locale-data', express.static('node_modules/react-intl/locale-data'));
        for(let locale in messages) {
            app.get(`/locale-data/messages/${locale}.json`, (req, res) => res.json(messages[locale]));
        }
        app.use('/cat-api', catApi('/cat-api'));
        app.use(this.handler.bind(this));
    }

    getHTML(markup:string, state:{[name:string]:any}) {
        const head = Helmet.rewind();
        return html`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                ${head.title.toString()}
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
                <link rel="stylesheet" type="text/css" href="/style.css">
                <link rel="stylesheet" href="/font-awesome-4.6.3/css/font-awesome.min.css">
            </head>
            <body>
                <span id="app">
                    ${markup}
                </span>            
                <script type="application/javascript">
                    window.STATE = ${JSON.stringify(state)};
                </script>
                <script type="application/javascript" src="/client.js" async></script>
            </body>
            </html>
        `;
    };

    getState(store) {
        const state = store.getState();
        delete state.intl;
        return state;
    };

    getStore(extraArguments:{[key:string]:any}) {
        let locale = extraArguments.cookies.get('locale');
        switch(locale) {
            case 'en':
            case 'ru':
                break;
            default:
                locale = 'en';
        }
        const state = {
            intl : Immutable({
                locale,
                messages : messages[locale]
            }),
            localeData : Immutable({
                [locale] : {
                    rules : rules[locale],
                    messages : messages[locale]
                }
            })
        };
        return store(state, extraArguments);
    };

    onResolveFetchData = (req, res, store, routes, errors:Array<any>) => {
        if(errors.length > 0) {
            console.warn('Fetch data rejects/errors', ...errors);
        }
        const context = createServerRenderContext();
        const markup = ReactDOM.renderToStaticMarkup(
            <ServerRouter
                location = {req.url}
                context = {context}
            >
                <App
                    store = {store}
                    routes = {routes}
                />
            </ServerRouter>
        );

        const result = context.getResult();

        if (result.redirect) {
            res.redirect(301, result.redirect.pathname);
            return;
        }

        res.status(200);
        res.end(this.getHTML(markup, this.getState(store)));
    };

    async handler(req, res) {
        const cookies = new Cookies(req, res);
        const getAuthorizationHeader = () => (
            'Bearer ' + cookies.get('access_token')
        );
        const baseUrl = process.env.PROTOCOL + '://' + process.env.HOSTNAME + ':' + process.env.PORT;

        const extraArguments = {
            cookies,
            api : api(baseUrl, getAuthorizationHeader)
        };

        const store = this.getStore(extraArguments);
        const location = url.parse(req.url);
        store.dispatch(CoreHistory.actions.change(location));


        const currentRoutes = routes(store, cookies);

        const resolveFetchData = () => Promise.resolve([]);

        matchPatternAndFetchData(req.url, currentRoutes);

        try {
            const errors = await resolveFetchData(req.url);
            this.onResolveFetchData(req, res, store, currentRoutes, errors);
        } catch(error) {
            res.status(500);
            res.end(error.stack);
            throw error;
        }
    };
}
