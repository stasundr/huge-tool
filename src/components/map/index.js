'use strict';

import { connect } from 'react-redux';
import component from './view';
import { mapOnClick, mapOnChange } from './duck';

function mapStateToProps(state) {
    return {
        samples: state.samples,
        mapCenterLat: state.mapCenterLat,
        mapCenterLng: state.mapCenterLng,
        mapZoom: state.mapZoom
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: ({x, y, lat, lng, event}) => dispatch(mapOnClick(x, y, lat, lng, event)),
        onChange: ({center, zoom, bounds, marginBounds}) => dispatch(mapOnChange(center, zoom, bounds, marginBounds))
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;