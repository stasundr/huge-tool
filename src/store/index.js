'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import devTools from 'remote-redux-devtools';

import reducer from './root_reducer';
import sagas from './sagas';
import initialState from './initial_state';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware), devTools);
const store = createStore(reducer, initialState, enhancer);

sagaMiddleware.run(sagas);

export default store;