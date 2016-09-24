'use strict';

import React from 'react';
import fetch from 'isomorphic-fetch';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class Share extends React.Component {
    constructor() {
        super();
        this.state = {token: undefined};
    }

    render() {
        let { state, replaceState } = this.props;
        const _import = (token) => {
            fetch(`${token}`)
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
                .then(json => { this.setState({value: `http://localhost:3000/${json.token}`})});
        };

        return (
            <div>
                <div className="row">
                    <div className="col col-12">
                        <button className="button primary outline" onClick={_export}>Export</button>
                        <button className="button primary outline" onClick={this.state.value ? () => _import(this.state.value) : null}>Import</button>
                    </div>
                </div>
                <div className="row splice">
                    <div className="col col-7">
                        <div className="controls width-100">
                            <input value={this.state.value}
                                   type="text" name="search" placeholder="Link"
                                onChange={({target: {value}}) => this.setState({value, copied: false})} />
                        </div>
                    </div>
                    <div className="col col-5">
                        <CopyToClipboard text={this.state.value}
                                         onCopy={() => this.setState({copied: true})}>
                            <button className="button primary">Copy</button>
                        </CopyToClipboard>

                        {this.state.copied ? <span style={{color: 'blue'}}>Copied.</span> : null}
                    </div>
                </div>
            </div>
        )
    }
}