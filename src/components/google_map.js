import React, {Componenet} from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            lat: this.props.lat,
            lng: this.props.lon
        })
    }
    render() {
        return <div ref="map"></div>
    }
}

export default GoogleMap;