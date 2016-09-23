'use strict';

import React from 'react';
import fetch from 'isomorphic-fetch';

export default class Share extends React.Component {
    constructor() {
        super();
        this.state = {token: undefined};
    }

    render() {
        let { state, replaceState } = this.props;



        const _import = (token) => {
            fetch(`/api/v1/import/${token}`)
                .then(res => res.json())
                .then(json => replaceState(json));
        };

        const _export = () => {
            fetch('/api/v1/export', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            })
                .then(res => res.json())
                .then(json => { this.setState({token: json.token})});
        };

        return (
            <div>
                <button className="button" onClick={() => _import('iuytre')}>Import</button>
                <button className="button" onClick={_export}>Export</button>
                <br/>
                {
                    (this.state.token)
                        ? `Your token is ${this.state.token}`
                        : null
                }
            </div>

        )
    }
}