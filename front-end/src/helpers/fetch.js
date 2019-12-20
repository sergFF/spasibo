import 'whatwg-fetch';
// import 'abortcontroller-polyfill/dist/polyfill-patch-fetch';
import isObject from 'lodash.isobject';

/**
 * Fetch API wrapper
 */
export function fetchApiNative(url, method, parameters, options) {
  let fetchUrl = url;
  let fetchParams = { method: method || 'GET' };

  const params = parameters ? Object.assign({}, parameters) : {};

  params.req_timestamp = new Date()
    .getTime();

  if (fetchParams.method === 'GET') {
    fetchUrl = Object.keys(params)
      .reduce((previousValue, currentValue) => {
        if (Object.prototype.hasOwnProperty.call(params, currentValue)) {
          return `${previousValue}${currentValue}=${encodeURIComponent(params[currentValue])}&`;
        }
        return previousValue;
      }, `${fetchUrl}?`);
    fetchUrl = fetchUrl.substring(0, fetchUrl.length - 1);
    fetchParams.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  } else if (params instanceof FormData) {
    fetchParams = { method: 'post', body: params };
  } else {
    fetchParams.body = JSON.stringify(params);
    fetchParams.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }
  fetchParams.credentials = 'include';
  // fetchParams.credentials = 'same-origin';
  return fetch(fetchUrl, fetchParams)
    .then(response => {
      const resContentType = response.headers.get('Content-Type');
      if (response.ok && response.status === 200) {
        if (/text\/plain/.test(resContentType)) return response.text();
        if (/application\/json/.test(resContentType)) return response.json();
        return response.body;
      }

      const error = {
        status: response.status || 500,
        message: response.statusText,
        statusText: response.statusText,
        response
      };
      // if ()
      // if (/application\/json/.test(resContentType)) {
      //   return response.json()
      //     .then(jsonResult => {
      //       error.message = jsonResult.message || response.statusText;
      //       return Promise.resolve({ response: { ...jsonResult, statusText: response.statusText }, error });
      //     });
      // }
      return Promise.reject(error);
    })
    .then(response => {
      if (response.error) {
        const error = {
          status: response.error.status,
          statusText: response.error.statusText,
          message: response.error.message,
          response: response.response
        };
        return Promise.reject(error);
      }

      if (!isObject(response)) return { value: response };
      return response;
    })
    .catch(error => {
      /**
       * Special case for expired sessions
       * so we can display a warning to user
       */
      if (error.status === undefined && error.name && error.name !== 'AbortError') {
        return Promise.reject({
          status: 302,
          message: '',
          statusText: ''
        });
      }

      const errorObj = error;
      if ((error.status && error.status.toString()[0] === 5)) {
        errorObj.message = 'Sorry, server is unavailable. Please, try again later';
      }
      return Promise.reject(errorObj);
    });
}

// export function fetchApi () {
//   // return {user: "ss"};
//   return fetch('http://localhost').then(res => console.log('res')).catch(e => console.log(e));
// }
/**
 * Fetch wrapper
 */
export function fetchApi(url, action, method = 'GET', params, options) {
  let reactAction = {};
  if (typeof action === 'string') {
    reactAction.type = action;
  } else {
    reactAction = { ...action };
  }

  return (dispatch, getState) => {
    dispatch({ ...reactAction, type: `REQUEST_${reactAction.type}` });

    return fetchApiNative(url, method, params, options)
      .then(
        json => {
          dispatch({ ...reactAction, type: `SUCCESS_${reactAction.type}`, payload: json });
          return json;
        },
        error => {
          if (error.status === 401) {
            // dispatch(SignOut());
            // dispatch(requireAuthAction());
          } else if (error.status === 500) {
            // dispatch(internalServerError('Internal Server Error!'));
          } else if (error.status === 404) {
            // dispatch(notFoundError(error.message || 'Not Found Error'));
          } else if (error.status === 403) {
            // dispatch(forbiddenError(error.message || 'Forbidden Error'));
          } else if (error.status === 505) {
            // dispatch(ODAError(error.message || 'ODA API Server Error'));
            console.log(error);
          } else if (error.status === 302) {
            // dispatch(sessionExpired());
          } else if (error.status === 400) {
            // dispatch(badRequestError(error.message || 'Request error'));
          }

          dispatch({ ...reactAction, type: `ERROR_${reactAction.type}`, payload: error });
          return Promise.reject(error);
        }
      );
  };
}
