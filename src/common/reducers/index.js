import { combineReducers } from 'redux';
import { cat } from './cat.js';
import { localeData } from './localeData.js';
import { staticFile } from './staticFile.js';
import { intlReducer as intl } from 'react-intl-redux';

export const reducers = combineReducers({
    cat,
    localeData,
    staticFile,
    intl
});