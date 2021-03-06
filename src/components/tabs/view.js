'use strict';

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Table from '../table';
import Map from '../map';
import Share from '../share';

export default class AppTabs extends React.Component {
    render() {
        const { selectTab, currentTab } = this.props;

        return (
            <Tabs onSelect={selectTab} selectedIndex={currentTab}>
                <TabList>
                    <Tab>Dataset</Tab>
                    <Tab>Tasks</Tab>
                    <Tab>Map</Tab>
                    <Tab>Share</Tab>
                </TabList>

                <TabPanel>
                    <div className="row">
                        <div className="col col-12">
                            <Table/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Hello from Tasks</h2>
                </TabPanel>
                <TabPanel>
                    <div className="row">
                        <div className="col col-12">
                            <Map/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="row">
                        <div className="col col-12">
                            <Share/>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        )
    }
}