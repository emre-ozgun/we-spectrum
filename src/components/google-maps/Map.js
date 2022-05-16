import React from 'react';
import { useSelector } from 'react-redux';
import { selectMapData } from '../../features/mapData/mapDataSlice';
import './Map.css';

const Map = () => {
	const defaultMapData = useSelector(selectMapData);

	console.log(defaultMapData);

	return (
		<section className='section section-map'>
			<div className='map-container'>
				<form className='map-form'>
					<div className='form-control'>
						<label htmlFor='lat'>Latitude</label>
						<input type='text' id='lat' placeholder='Enter latitude...' />
					</div>
					<div className='form-control'>
						<label htmlFor='long'>Longitude</label>
						<input type='text' id='long' placeholder='Enter latitude...' />
					</div>
					<div className='form-control'>
						<label htmlFor='gml'>Ground Motion Level</label>
						<select name='gml' id='gml'>
							<option value='DD-1'>DD-1</option>
							<option value='DD-2'>DD-2</option>
							<option value='DD-3'>DD-3</option>
							<option value='DD-4'>DD-4</option>
						</select>
					</div>
					<div className='form-control'>
						<label htmlFor='gc'>Ground Type</label>
						<select name='gc' id='gc'>
							<option value='ZA'>ZA</option>
							<option value='ZB'>ZB</option>
							<option value='ZC'>ZC</option>
							<option value='ZD'>ZD</option>
							<option value='ZE'>ZE</option>
						</select>
					</div>
					<button>Proceed</button>
				</form>
				<div className='map'></div>
			</div>
		</section>
	);
};

export default Map;
