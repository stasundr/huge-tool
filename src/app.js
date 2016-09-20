'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import _c from './consts';
import AppTabs from './components/tabs';

store.dispatch({ type: _c.DATASET_FETCH_REQUESTED });

ReactDOM.render(
    <Provider store={store}>
        <AppTabs />
    </Provider>,
    document.getElementById('root')
);