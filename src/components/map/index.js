'use strict';

import { connect } from 'react-redux';
import component from './view';
//import { selectTab } from './duck';

function mapStateToProps(state) {
    return {
        samples: state.samples,
        mapCenterLat: state.mapCenterLat,
        mapCenterLng: state.mapCenterLng
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //selectTab: (currentTab, lastTab) => dispatch(selectTab(currentTab, lastTab))
        onClick: ({x, y, lat, lng, event}) => dispatch({type: `${x}`}),
        onChange: ({center, zoom, bounds, marginBounds}) => dispatch({type: `${zoom}`})
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;