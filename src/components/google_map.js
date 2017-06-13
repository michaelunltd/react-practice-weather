import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        console.log("DID MOUNT GOOGLE MAP");
        console.log(`lat from mount: ${this.props.lat}`);
        console.log(`lon from mount: ${this.props.lon}`);
        const map = new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });

        console.log(`This is the map: ${map}`);
    }
    render() {
        console.log("RENDERING GOOGLE MAP");
        return <div ref="map" />;
    }
}

export default GoogleMap;