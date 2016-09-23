'use strict';

import { connect } from 'react-redux';
import component from './view';
import { stateReplace } from './duck';

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        replaceState: state => dispatch(stateReplace(state))
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;