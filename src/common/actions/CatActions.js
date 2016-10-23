import { Action } from '../constants/Action';

export const CatActions = {
    fetchRandomCatStart() {
        return {
            type : Action.RANDOM_CAT_FETCH_DATA_START
        };
    },
    fetchRandomCatComplete(url:string) {
        return {
            type : Action.RANDOM_CAT_FETCH_DATA_COMPLETE,
            payload : url
        };
    },
    fetchRandomCatFail(error) {
        return {
            type : Action.RANDOM_CAT_FETCH_DATA_FAIL,
            error
        };
    },
    fetchRandomCat() {
        return (dispatch, getState, { api }) => {
            dispatch(CatActions.fetchRandomCatStart());
            return api.getRandomCat().then(
                (url) => dispatch(CatActions.fetchRandomCatComplete(url)),
                (error) => dispatch(CatActions.fetchRandomCatFail(error))
            )
        };
    }
};