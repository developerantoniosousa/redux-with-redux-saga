import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './rootReducers';
import rootSagas from './rootSagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const enhancer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...middlewares);

const store = createStore(rootReducers, enhancer);

sagaMiddleware.run(rootSagas);

export default store;
