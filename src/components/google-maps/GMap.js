import React from 'react';
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	Polyline
} from 'react-google-maps';
import { MAPS_URL } from '../../mapsKey';
import { selectMapData, setCoords } from '../../features/mapData/mapDataSlice';
import { useSelector, useDispatch } from 'react-redux';
import { mapStyles } from '../../utils/mapStyles';
import PolylineCoordinates from '../../polyline.json';

const GMap = () => {
	const dispatch = useDispatch();
	const { lat, long, closestCoords, formDataComposite } = useSelector(selectMapData);



	const handleCoordChange = (e) => {
		const lat = e.latLng.lat();
		const lng = e.latLng.lng();
		dispatch(setCoords({ lat, lng }));
	};

	const lineBetween = [
		{
			lat: Number(closestCoords.latClosest),
			lng: Number(closestCoords.lngClosest)
		},
		{
			lat: Number(formDataComposite.formLat),
			lng: Number(formDataComposite.formLong)
		}
	];

	const canDraw = (c) => {
		return c.every(v => v !== null);
	}



	return (
		<GoogleMap
			// defaultZoom={5.5}
			zoom={Number(`${canDraw(lineBetween) ? 10 : 1}`)}
			defaultCenter={{ lat: lat, lng: long }}
			onClick={handleCoordChange}
			defaultOptions={{ styles: mapStyles }}
		>
			<Polyline path={PolylineCoordinates} options={{
				strokeColor: '#0d6efd',
				strokeOpacity: 0.5,
				strokeWeight: 1,
			}} />

			{canDraw(lineBetween) && (
				<Polyline

					path={lineBetween}
					options={{
						strokeColor: 'green',
						strokeOpacity: 0.5,
						strokeWeight: 1,
					}}
				/>
			)}

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
