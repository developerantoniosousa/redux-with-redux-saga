import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import ProductTypes from './actionTypes';
import * as ProductActions from './actionCreators';
import api from '../../../services/api';

function* fetchProducts(action) {
  try {
    const {
      data: { docs },
    } = yield call(api.get, '/products');
    yield put(ProductActions.loadListSuccess(docs));
  } catch {
    yield put(ProductActions.loadListFailure());
  }
}

export default all([takeLatest(ProductTypes.LOAD_LIST_REQUEST, fetchProducts)]);
