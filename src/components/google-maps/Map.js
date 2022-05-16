import React from 'react';
import { useSelector } from 'react-redux';
import { selectMapData } from '../../features/mapData/mapDataSlice';
import MapF from './GMap';

import './Map.css';

const Map = () => {
	const { lat, long } = useSelector(selectMapData);

	const initialMapFormFields = {
		formLat: lat,
		formLong: long,
		formGML: 'DD-1',
		formGC: 'ZA',
	};

	const [mapFormFields, setMapFormFields] = React.useState(
		() => initialMapFormFields
	);

	const [disabled, setDisabled] = React.useState(true);

	React.useEffect(() => {
		if (!mapFormFields.formLat || !mapFormFields.formLong) {
			setDisabled(true);
			// } else if (
			// 	mapFormFields.formGML.startsWith('s') ||
			// 	mapFormFields.formGC.startsWith('s')
			// ) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	}, [mapFormFields.formLat, mapFormFields.formLong, disabled]);

	React.useEffect(() => {
		setMapFormFields({ ...mapFormFields, formLat: lat, formLong: long });
	}, [lat, long]);

	const handleSubmit = (e) => {
		e.preventDefault();

		// dispatch action here.

		// clear fields
		setMapFormFields(initialMapFormFields);
	};

	return (
		<section className='section section-map'>
			<div className='map-container'>
				<form className='map-form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='formLat'>Latitude</label>
						<input
							type='number'
							id='formLat'
							name='formLat'
							placeholder='Enter latitude...'
							value={mapFormFields.formLat}
							onChange={(e) =>
								setMapFormFields({
									...mapFormFields,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='formLong'>Longitude</label>
						<input
							type='number'
							id='formLong'
							name='formLong'
							placeholder='Enter longitude...'
							value={mapFormFields.formLong}
							onChange={(e) =>
								setMapFormFields({
									...mapFormFields,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='formGML'>Ground Motion Level</label>
						<select
							name='formGML'
							id='formGML'
							value={mapFormFields.formGML}
							onChange={(e) =>
								setMapFormFields({
									...mapFormFields,
									[e.target.name]: e.target.value,
								})
							}
						>
							<option value='DD-1'>DD-1</option>
							<option value='DD-2'>DD-2</option>
							<option value='DD-3'>DD-3</option>
							<option value='DD-4'>DD-4</option>
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='formGC'>Ground Type</label>
						<select
							name='formGC'
							id='formGC'
							value={mapFormFields.formGC}
							onChange={(e) =>
								setMapFormFields({
									...mapFormFields,
									[e.target.name]: e.target.value,
								})
							}
						>
							<option value='ZA'>ZA</option>
							<option value='ZB'>ZB</option>
							<option value='ZC'>ZC</option>
							<option value='ZD'>ZD</option>
							<option value='ZE'>ZE</option>
						</select>
					</div>
					<button disabled={disabled}>Proceed</button>
				</form>
				<div className='map'>
					<MapF />
				</div>
			</div>
		</section>
	);
};

export default Map;
