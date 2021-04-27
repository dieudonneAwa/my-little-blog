import axios, { Method } from "axios";
import { Action } from "../Theme/types";

type AsyncActionNames = {
  readonly failure: string;
  readonly loading: string;
  readonly success: string;
};

type AsyncActions = {
  readonly loading: (bool: boolean) => Action;
  readonly failure: (bool: boolean, error: any) => Action;
  readonly success: (payload: any) => Action;
};

const composeData = (method: Method, body: any) =>
  method === "post" || method === "put" || method === "patch"
    ? { data: body }
    : {};

const getRequestUrl = (url: string) => `${process.env.REACT_APP_API_BASE_URL}${url}`;

/**
 * Returns a promise response for an HTTP request
 * Will be using this api call when making client side api calls
 */
export const axiosApiCall = (
  url: string,
  method: Method,
  body: any = {},
  configOptions: any = {}
) => {
  return axios({
    method,
    url: getRequestUrl(url),
    ...composeData(method, body),
    ...configOptions,
  });
};

/**
 * Constructs async action Type postfix
 * @param baseName {string}
 * @returns {string}
 */
export function asyncActionNames(baseName: string): AsyncActionNames {
  return {
    failure: `${baseName}_FAILURE`,
    loading: `${baseName}_LOADING`,
    success: `${baseName}_SUCCESS`,
  };
}

/**
 * Constructs async actions
 * @param {string} actionName
 * @returns {function}
 */
export const asyncActions = (actionName: string): AsyncActions => ({
  loading: (bool) => ({
    type: asyncActionNames(actionName).loading,
    payload: bool,
  }),
  failure: (bool, error) => ({
    type: asyncActionNames(actionName).failure,
    payload: { error, status: bool },
  }),
  success: (payload) => ({
    type: asyncActionNames(actionName).success,
    payload,
  }),
});

/**
 * Dispatches Redux thunk Actions
 * @returns {function} - Function that dispatches Redux Actions
 * @param dispatch {function}
 */
export const asyncRequest = (dispatch: (arg0: Action) => void) => async (
  actionName: string,
  url: string,
  method: Method,
  body: unknown = {},
  configOptions: any = {}
) => {
  dispatch(asyncActions(actionName).loading(true));
  try {
    const res = await axiosApiCall(url, method, body, configOptions);
    dispatch(asyncActions(actionName).success(res.data));
    return res;
  } catch (err) {
    if (err?.response) {
      dispatch(asyncActions(actionName).failure(true, err.response.data));
    }
    throw err;
  }
};
