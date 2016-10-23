import Immutable from 'seamless-immutable';
import { Action } from '../constants/Action';

export const initialState:{
    [name:string]:{
        file:string,
        url:string
    }
} = Immutable({});

export function staticFile(state = initialState, { type, payload }) {
    switch(type) {
        case Action.STATIC_FILE_FETCH_DATA_COMPLETE: {
            const { name, file, url } = payload;
            return state.set(name, {
                file,
                url
            });
        }
        default: {
            return state;
        }
    }
}