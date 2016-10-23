import { Action } from '../constants/Action';
import { Environment } from '../Environment';
import { updateIntl } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';

export const LocaleDataActions = {
    updateStart(locale:string) {
        return {
            type: Action.UPDATE_LOCALE_DATA_START,
            payload : locale
        }
    },
    updateFail(locale:string, error) {
        return {
            type: Action.UPDATE_LOCALE_DATA_FAIL,
            payload : locale,
            error
        }
    },
    updateComplete(locale:string, rules:string, messages:{[id:string]:string}, addScript:?boolean) {
        return (dispatch, getState, { cookies }) => {
            if(Environment.isClient() && addScript) {
                const script = document.createElement('script');
                script.setAttribute('type','application/javascript');
                script.innerHTML = rules;
                document.head.appendChild(script);
                if ('ReactIntlLocaleData' in window) {
                    Object.keys(ReactIntlLocaleData).forEach((lang) => {
                        addLocaleData(ReactIntlLocaleData[lang]);
                    });
                }
            }
            cookies.set('locale', locale);
            dispatch({
                type: Action.UPDATE_LOCALE_DATA_COMPLETE,
                payload : {
                    locale,
                    rules,
                    messages
                }
            });
            dispatch(updateIntl({
                locale,
                messages
            }));
        }
    },
    update(locale:string) {
        return (dispatch, getState, { api }) => {
            const state = getState();
            dispatch(LocaleDataActions.updateStart(locale));
            const {rules, messages} = state.localeData[locale] || {};
            if(!rules || !messages) {
                return Promise.all([
                    api.getFile(`/locale-data/${locale}.js`),
                    api.getFile(`/locale-data/messages/${locale}.json`)
                ]).then(
                    ([rules, messages]) => dispatch(LocaleDataActions.updateComplete(locale, rules, messages, true)),
                    (error) => dispatch(LocaleDataActions.updateFail(locale, error))
                );
            } else {
                dispatch(LocaleDataActions.updateComplete(locale, rules, messages))
            }
        };
    }
};