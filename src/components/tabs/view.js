'use strict';

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class AppTabs extends React.Component {
    render() {
        const { selectTab, currentTab } = this.props;

        return (
            <Tabs onSelect={selectTab} selectedIndex={currentTab}>
                <TabList>
                    <Tab>Dataset</Tab>
                    <Tab>Tasks</Tab>
                    <Tab>Map</Tab>
                </TabList>

                <TabPanel>
                    <h2>Hello from Dataset</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Hello from Tasks</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Hello from Map</h2>
                </TabPanel>
            </Tabs>
        )
    }
}