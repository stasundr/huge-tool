'use strict';

// Initial state for redux store
const initialState = {
    currentTab: 0,
    lastTab: 0,

    mapCenterLat: 59.938043,
    mapCenterLng: 30.337157,
    mapZoom: 3,

    samples: [
        {
            id: 1,
            lat: 50,
            lng: 50
        },

        {
            id: 2,
            lat: 30,
            lng: 60
        }
    ]
};

export default initialState;