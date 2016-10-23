import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from '../reducers';
import { Environment } from '../Environment';

export function store(initialState, extraArguments:{[key:string]:any}) {
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunk.withExtraArgument(extraArguments)),
            (Environment.isClient() && window.devToolsExtension) ? window.devToolsExtension() : (f => f)
        )
    );
}
