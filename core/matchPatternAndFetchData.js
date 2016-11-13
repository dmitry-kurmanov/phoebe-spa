import matchPattern from 'react-router/matchPattern';
import { routes } from '../src/common/routes/index';

// matchPattern(pattern, location, matchExactly, parent)
export function matchPatternAndFetchData(location, routes) {
    for(let {pattern, exactly, redirectTo, component} of routes.asArray) {
        //console.log(matchPattern(pattern, location, exactly));
    }
}