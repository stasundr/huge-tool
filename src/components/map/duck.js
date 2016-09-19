'use strict';

import _c from '../../consts';
import initialState from '../../store/initial_state';

// Action creators
export function mapOnClick(x, y, lat, lng, event) {
    return {
        type: _c.MAP_ON_CLICK,
        payload: { x, y, lat, lng, event }
    }
}

export function mapOnChange(center, zoom, bounds, marginBounds) {
    return {
        type: _c.MAP_ON_CHANGE,
        payload: { center, zoom, bounds, marginBounds }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case _c.MAP_ON_CLICK:
            return Object.assign({}, state, {
                mapCenterLat: action.payload.lat,
                mapCenterLng: action.payload.lng
                // TODO: ADD OTHER PROPS
            });

        case _c.MAP_ON_CHANGE:
            return Object.assign({}, state, {
                mapZoom: action.payload.zoom
                // TODO: ADD OTHER PROPS
            });

        default:
            return state;
    }
};

export default reducer;