import React from 'react';
import { calculateClosestDistance } from './haversineClosestDistance';


import { useSelector, useDispatch } from 'react-redux';
import { selectMapData, markClosestPointOnGoogleMaps } from '../../features/mapData/mapDataSlice'

import './ClosestDistance.css';

const ClosestDistance = () => {

	const dispatch = useDispatch();


	const [shouldMarkClosestOnGoogleMaps, setShouldMarkClosestOnGoogleMaps] = React.useState(false);
	const [closestObj, setClosestObj] = React.useState(null);

	const { proceed, formDataComposite } = useSelector(selectMapData);

	const { formLat, formLong, formGML, formGC } = formDataComposite;


	React.useEffect(() => {

		setClosestObj(calculateClosestDistance({ lat: formLat, long: formLong }));
		console.log('CLOSESTTTTTT', closestObj);


		if (closestObj) {
			dispatch(markClosestPointOnGoogleMaps({ lat: closestObj.latitude, long: closestObj.longitude }))

		}

	}, [proceed, closestObj])


	if (!proceed || !formLat || !formLong || !closestObj) {
		return;
	}




	return (
		<section className='section section-closest-data'>
			<div className="section-container">
				<article className='section-title'>
					<div className="section-title__info">
						<h1>Closest distance</h1>
						<small><span>*</span>calculates Vertical and Horizontal Elastic Response Spectrum</small>
					</div>
					<div className="section-title__cta">
						<button className='plot-btn'>PLOT</button>
					</div>
				</article>
				<article className='closest-data'>
					<table className='data-table'>


						<thead>
							<tr>
								{Object.keys(closestObj).map(col => (
									<th key={Math.random() * Date.now().toString()}>
										{col.toUpperCase()}
									</th>
								))}
							</tr>
						</thead>

						<tbody>
							<tr>
								{Object.values(closestObj).map(row => (
									<td key={Math.random() * Date.now().toString()}>
										{row}
									</td>
								))}
							</tr>
						</tbody>



					</table>
				</article>
				<article className='closest-data'>
					<table className='data-table data-misc'>
						<thead>


							<tr>
								<th>Ground Motion Level</th>
								<th>Ground Type</th>
							</tr>
						</thead>

						<tbody>

							<tr>
								<td>{formGML}</td>
								<td>{formGC}</td>
							</tr>
						</tbody>

					</table>
				</article>
			</div>
		</section>
	);
};

export default ClosestDistance;


