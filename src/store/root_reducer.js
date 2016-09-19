'use strict';

//import { combineReducers } from 'redux';
import initialState from './initial_state';
import tabsReducer from '../components/tabs/duck';

const rootReducer = (state = initialState, action) => {
    return tabsReducer(state, action);
};

export default rootReducer;