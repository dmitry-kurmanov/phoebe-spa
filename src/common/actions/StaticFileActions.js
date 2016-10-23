import { Action } from '../constants/Action';

export const StaticFileActions = {
    fetchFileStart(url:string, name:string) {
        return {
            type : Action.STATIC_FILE_FETCH_DATA_START,
            payload : {
                url,
                name
            }
        };
    },
    fetchFileComplete(url:string, name:string, file:string) {
        return {
            type : Action.STATIC_FILE_FETCH_DATA_COMPLETE,
            payload : {
                url,
                name,
                file
            }
        };
    },
    fetchFileFail(url:string, name:string, error) {
        return {
            type : Action.STATIC_FILE_FETCH_DATA_FAIL,
            payload : {
                url,
                name
            },
            error
        };
    },
    fetchFile(url:string, name:string) {
        return (dispatch, getState, { api }) => {
            dispatch(StaticFileActions.fetchFileStart(url, name));
            return api.getFile(url).then(
                (file) => dispatch(StaticFileActions.fetchFileComplete(url, name, file)),
                (error) => dispatch(StaticFileActions.fetchFileFail(url, name, error))
            );
        };
    },
    fetchFileMitLicence() {
        return (dispatch, getState) => {
            const state = getState();
            const locale = state.intl.locale;
            const licenseName = `MIT-${locale}`;
            return dispatch(StaticFileActions.fetchFile(
                `/${locale}/MIT.html`,
                licenseName
            ));
        }
    }
};