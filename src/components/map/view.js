'use strict';

import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from '../marker';

export default class Map extends React.Component {
    render() {
        const {
            samples,
            mapCenterLat,
            mapCenterLng,
            mapZoom,
            onClick,
            onChange
        } = this.props;

        const markers = samples.filter(e => parseFloat(e.lat) && parseFloat(e.lng));
        const nodes = markers.map(marker => `${marker.lat}, ${marker.lng}`);

        let counts = {};
        nodes.forEach(node => counts[node] = counts[node] ? counts[node] + 1 : 1);


        return (
            <div style={{height: window.innerHeight - 200}}>
                <GoogleMap
                    bootstrapURLKeys={{key: "AIzaSyCvXDv3NmjBC2D85QIKJ8ZmKq-K9jCuZ5A"}}
                    center={[mapCenterLat, mapCenterLng]}
                    zoom={mapZoom}
                    onClick={onClick}
                    onChange={onChange}
                >
                    {
                        markers.map(e =>
                            <Marker
                                key={e.id}
                                lat={e.lat}
                                lng={e.lng}
                                number={counts[`${e.lat}, ${e.lng}`]}
                            />
                        )
                    }
                </GoogleMap>
            </div>
        )
    }
}