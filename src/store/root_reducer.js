'use strict';

//import { combineReducers } from 'redux';
import initialState from './initial_state';
import tabsReducer from '../components/tabs/duck';
import mapReducer from '../components/map/duck';

const rootReducer = (state = initialState, action) => {
    return mapReducer(
        tabsReducer(state, action),
        action
    );
};

export default rootReducer;