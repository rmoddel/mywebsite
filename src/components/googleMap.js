import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

function Map() {
  return <GoogleMap defaultZoom={14} defaultCenter={{ lat: 40.084500, lng: -74.25050 }}>
    <Marker position={{ lat: 40.084500, lng: -74.25050 }}/>
  </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App (){
  return (
    <div style={{width  : '100vw', height : '100vw'}}>
      <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAbqyJJVkfoYuibYRfUNNbwRJNRxmE150U"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
