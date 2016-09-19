'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import AppTabs from './components/tabs';

ReactDOM.render(
    <Provider store={store}>
        <AppTabs />
    </Provider>,
    document.getElementById('root')
);