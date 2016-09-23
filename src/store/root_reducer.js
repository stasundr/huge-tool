'use strict';

//import { combineReducers } from 'redux';
import initialState from './initial_state';
import _c from '../consts';
import tabsReducer from '../components/tabs/duck';
import mapReducer from '../components/map/duck';
import shareReducer from '../components/share/duck';

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case _c.DATASET_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                sample_ids: action.payload.sample_ids
            });

        case _c.SAMPLE_FETCH_SUCCEEDED:
            return Object.assign({}, state, {
                samples: [...state.samples, action.payload]
            });

        default:
            return state;
    }
};

const rootReducer = (state = initialState, action) => {
    return appReducer(
        mapReducer(
            tabsReducer(
                shareReducer(
                    state,
                    action
                ),
                action
            ),
            action
        ),
        action
    );
};

export default rootReducer;