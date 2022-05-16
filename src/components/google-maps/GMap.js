import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { MAPS_URL } from '../../mapsKey';

const GMap = () => {
	return (
		<GoogleMap
			defaultZoom={5.5}
			defaultCenter={{ lat: 38.963745, lng: 35.24332 }}
		/>
	);
};

const WrappedMap = withScriptjs(withGoogleMap(GMap));

const MapAdjusted = () => {
	return (
		<WrappedMap
			googleMapURL={MAPS_URL}
			loadingElement={<div style={{ height: '100%' }} />}
			containerElement={<div style={{ height: '100%' }} />}
			mapElement={<div style={{ height: '100%' }} />}
		/>
	);
};

export default MapAdjusted;
