import Immutable from 'seamless-immutable';
import { scrollTo } from './scrollTo';

const Action = {
    PUSH             : 'HISTORY_PUSH',
    REPLACE          : 'HISTORY_REPLACE',
    GO               : 'HISTORY_GO',
    GO_BACK          : 'HISTORY_GO_BACK',
    GO_FORWARD       : 'HISTORY_GO_FORWARD',
    REDIRECT         : 'HISTORY_REDIRECT',
    CHANGE_LOCATION  : 'HISTORY_CHANGE_LOCATION',
    CONNECT          : 'HISTORY_CONNECT',
    DISCONNECT       : 'HISTORY_DISCONNECT'
};

const actions = {
    push : (location) => ({
        type : Action.PUSH,
        payload : location
    }),
    replace : (location) => ({
        type : Action.REPLACE,
        payload : location
    }),
    go : (number) => ({
        type : Action.GO,
        payload : number
    }),
    goBack : () => ({
        type : Action.GO_BACK,
    }),
    goForward : () => ({
        type : Action.GO_FORWARD
    }),
    redirect : (location) => ({
        type : Action.REDIRECT,
        payload : location
    }),
    connect : (history) => ({
        type : Action.CONNECT,
        payload : history
    }),
    disconnect : () => ({
        type : Action.DISCONNECT
    }),
    change : (location) => ({
        type : Action.CHANGE_LOCATION,
        payload : location
    })
};

function scrollToAnchor({ hash }) {
    try {
        scrollTo(hash.slice(1));
    } catch(err) {}
}

function middleware() {
    let history, unlisten = () => {};
    return store => next => action => {
        switch(action.type) {
            case Action.CONNECT: {
                history = action.payload;
                unlisten = history.listen(
                    location => {
                        store.dispatch(
                            actions.change(location)
                        );
                        scrollToAnchor(location);
                    }
                );
                scrollToAnchor(history.location);
                break;
            }
            case Action.DISCONNECT: {
                unlisten();
                unlisten = undefined;
                history = undefined;
                break;
            }
        }
        if(history) {
            switch(action.type) {
                case Action.PUSH:       history.push(action.payload); break;
                case Action.REPLACE:    history.replace(action.payload); break;
                case Action.GO:         history.go(action.payload); break;
                case Action.GO_BACK:    history.goBack(); break;
                case Action.GO_FORWARD: history.goForward(); break;
                case Action.REDIRECT:   window.location = action.payload; break;
            }
        }
        return next(action);
    };
}

const initialState = Immutable({});

function history(state = initialState, {type, payload}) {
    switch(type) {
        case Action.CHANGE_LOCATION:
            const { hash, pathname, query, search } = payload;
            return state.replace({
                hash,
                pathname,
                query,
                search
            });
            break;
        default:
            return state;
    }
}

export const CoreHistory = {
    middleware,
    actions,
    reducer : history
};