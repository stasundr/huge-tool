'use strict';

import React from 'react';

export default class Marker extends React.Component {
    render() {
        const icon = (this.props.number > 1) ? 'fa fa-group' : 'fa fa-user';

        return (
            <i className={icon}/>
        )
    }
}