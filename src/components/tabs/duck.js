'use strict';

import _c from '../../consts';
import initialState from '../../store/initial_state';

// Action creators
export function selectTab(currentTab, lastTab) {
    return {
        type: _c.SELECT_TAB,
        payload: { currentTab, lastTab }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case _c.SELECT_TAB:
            return Object.assign({}, state, {
                currentTab: action.payload.currentTab,
                lastTab: action.payload.lastTab
            });

        default:
            return state;
    }
};

export default reducer;