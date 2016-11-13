import { combineReducers } from 'redux';
import { intlReducer as intl } from 'react-intl-redux';
import { cat } from './cat.js';
import { CoreHistory } from '../../../core/CoreHistory';
import { localeData } from './localeData.js';
import { staticFile } from './staticFile.js';

export const reducers = combineReducers({
    history : CoreHistory.reducer,
    intl,
    localeData,
    cat,
    staticFile
});