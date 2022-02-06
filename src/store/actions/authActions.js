// Async actionTypes
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

/**
 * Peticion para login
 * @param {http method} method
 * @param {url} url
 * @param {data} data
 * @returns  API_CALL_SUCCESS O API_CALL_FAILURE
 */
export const genericHttp = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method,
                url,
                data,
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE,
        },
    };
};
