'use strict';

//import { combineReducers } from 'redux';
import initialState from './initial_state';
import _c from '../consts';
import tabsReducer from '../components/tabs/duck';
import mapReducer from '../components/map/duck';

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case _c.DATASET_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                sample_ids: action.sample_ids
            });

        default:
            return state;
    }
};

const rootReducer = (state = initialState, action) => {
    return appReducer(
        mapReducer(
            tabsReducer(
                state,
                action
            ),
            action
        ),
        action
    );
};

export default rootReducer;