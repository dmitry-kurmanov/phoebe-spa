const next = (() => {
    let index = 0;
    return () => 'Action-' + index++;
})();

export const Action = {
    RANDOM_CAT_FETCH_DATA_START : next(),
    RANDOM_CAT_FETCH_DATA_COMPLETE : next(),
    RANDOM_CAT_FETCH_DATA_FAIL : next(),
    MIT_FETCH_DATA_START : next(),
    MIT_FETCH_DATA_COMPLETE : next(),
    MIT_FETCH_DATA_FAIL : next(),
    UPDATE_LOCALE_DATA_START : next(),
    UPDATE_LOCALE_DATA_COMPLETE : next(),
    UPDATE_LOCALE_DATA_FAIL : next(),
    STATIC_FILE_FETCH_DATA_START : next(),
    STATIC_FILE_FETCH_DATA_COMPLETE : next(),
    STATIC_FILE_FETCH_DATA_FAIL : next(),
};