import React from 'react';
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
} from 'react-google-maps';
import { MAPS_URL } from '../../mapsKey';
import { selectMapData, setCoords } from '../../features/mapData/mapDataSlice';
import { useSelector, useDispatch } from 'react-redux';
import { mapStyles } from '../../utils/mapStyles';

const GMap = () => {
	const dispatch = useDispatch();
	const { lat, long } = useSelector(selectMapData);

	const handleCoordChange = (e) => {
		const lat = e.latLng.lat();
		const lng = e.latLng.lng();
		dispatch(setCoords({ lat, lng }));
	};

	return (
		<GoogleMap
			defaultZoom={6}
			defaultCenter={{ lat: lat, lng: long }}
			onClick={handleCoordChange}
			defaultOptions={{ styles: mapStyles }}
		>
			<Marker position={{ lat, lng: long }} />
		</GoogleMap>
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
