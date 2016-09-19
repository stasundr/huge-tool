'use strict';

import { connect } from 'react-redux';
import component from './view';
import { selectTab } from './duck';

function mapStateToProps(state) {
    return {
        currentTab: state.currentTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectTab: (currentTab, lastTab) => dispatch(selectTab(currentTab, lastTab))
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;