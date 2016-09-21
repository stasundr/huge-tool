'use strict';

import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

export default class DatasetTable extends React.Component {
    render() {
        const { samples } = this.props;

        const TextCell = ({rowIndex, data, col}) => (
            <Cell>
                {data[rowIndex][col]}
            </Cell>
        );

        return (
            <Table
                rowHeight={40}
                rowsCount={samples.length}
                width={window.innerWidth}
                height={window.innerHeight - 200}
                headerHeight={40}
            >
                <Column
                    header={<Cell>Sample ID</Cell>}
                    cell={<TextCell data={samples} col='id' />}
                    width={100}
                    fixed
                />
                <Column
                    header={<Cell>Sex</Cell>}
                    cell={<TextCell data={samples} col='sex' />}
                    width={50}
                />
                <Column
                    header={<Cell>Latitude</Cell>}
                    cell={<TextCell data={samples} col='lat' />}
                    width={120}
                />
                <Column
                    header={<Cell>Longitude</Cell>}
                    cell={<TextCell data={samples} col='lng' />}
                    width={120}
                />
                <Column
                    header={<Cell>Population</Cell>}
                    cell={<TextCell data={samples} col='population' />}
                    width={120}
                />
            </Table>
        )
    }
}