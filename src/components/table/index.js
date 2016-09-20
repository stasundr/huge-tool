'use strict';

import { connect } from 'react-redux';
import component from './view';
//import { selectTab } from './duck';

function mapStateToProps(state) {
    return {
        samples: state.samples
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;