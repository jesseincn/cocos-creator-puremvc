import fetch = require("isomorphic-fetch");

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseErrorMessage({data}) {
    const {error_desc, result_code} = data.req_ret;
    if (result_code !== 0) {
        throw new Error(error_desc);
    }
    return data;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    const defaultOptions = {
        // credentials: 'include',
    };
    const newOptions = {...defaultOptions, ...options};
    if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
        if (!(newOptions.body instanceof FormData)) {
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...newOptions.headers,
            };
            newOptions.body = JSON.stringify(newOptions.body);
        } else {
            // newOptions.body is FormData
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                ...newOptions.headers,
            };
        }
    }

    return fetch(url, newOptions)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({data}))
        // .then(parseErrorMessage)
        .catch(err => ({err}));
}