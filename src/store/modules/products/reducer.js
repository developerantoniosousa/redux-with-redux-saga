import productsTypes from './actionTypes';

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  hasError: false,
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case productsTypes.LOAD_LIST_REQUEST:
      return { ...state, hasError: false, isLoading: true };
    case productsTypes.LOAD_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload.docs,
        hasError: false,
        isLoading: false,
      };
    case productsTypes.LOAD_LIST_FAILURE:
      return { ...state, hasError: true, isLoading: false };
    default:
      return state;
  }
}
