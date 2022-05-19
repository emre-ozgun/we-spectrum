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
	const { lat, long, closestCoords } = useSelector(selectMapData);

	const handleCoordChange = (e) => {
		const lat = e.latLng.lat();
		const lng = e.latLng.lng();
		dispatch(setCoords({ lat, lng }));
	};



	console.log('closest coords', closestCoords);


	return (
		<GoogleMap
			defaultZoom={5.5}
			defaultCenter={{ lat: lat, lng: long }}
			onClick={handleCoordChange}
			defaultOptions={{ styles: mapStyles }}
		>
			<Marker position={{ lat, lng: long }} />
			{closestCoords.latClosest && (
				<Marker
					opacity={0.5}
					position={{ lat: closestCoords.latClosest, lng: closestCoords.lngClosest }} />
			)}
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
