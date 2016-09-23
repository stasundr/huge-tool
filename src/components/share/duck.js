'use strict';

import _c from '../../consts';
import initialState from '../../store/initial_state';

// Action creators
export function stateReplace(state) {
    return {
        type: _c.STATE_REPLACE,
        state
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case _c.STATE_REPLACE:
            return action.state;

        default:
            return state;
    }
};

export default reducer;