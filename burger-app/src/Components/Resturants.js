import React from 'react';
import '../App.css';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

class MapContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}]
      }
    }
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
    
    render() {
      return (
        <div className="map-content">
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
            {this.displayMarkers()}
          </Map>
          </div>
      );
    }
  }
 const mapStyles= {
    width:"50%",
    height:'100vh',
    marginTop:'10rem',
    marginLeft:'30rem',
    position:'fixed'
}
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCaSYA81BFNgBHTolKAPLcEz5ppjBRSS1Q'
  })(MapContainer);
