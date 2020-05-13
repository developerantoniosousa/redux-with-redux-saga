import productsTypes from './actionTypes';

export function loadListRequest() {
  return { type: productsTypes.LOAD_LIST_REQUEST };
}

export function loadListSuccess(docs) {
  return { type: productsTypes.LOAD_LIST_SUCCESS, payload: { docs } };
}

export function loadListFailure() {
  return { type: productsTypes.LOAD_LIST_FAILURE };
}
