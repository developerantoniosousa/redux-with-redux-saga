import { combineReducers } from 'redux';

import products from './modules/products/reducer';
import auth from './modules/auth/reducer';

export default combineReducers({
  products,
  auth,
});
