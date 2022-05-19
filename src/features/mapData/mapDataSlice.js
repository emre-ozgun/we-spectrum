import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
	lat: 38.963745,
	long: 35.24332,
	formDataComposite: {
		formLat: null,
		formLong: null,
		formGML: null,
		formGC: null,
	},
	proceed: false,
	closestDistance: null
};

export const mapDataSlice = createSlice({
	name: 'mapData',
	initialState,
	reducers: {
		setCoords: (state, action) => {
			// reacts to google map lat/long selection
			state.lat = action.payload.lat;
			state.long = action.payload.lng;
		},
		clearCoords: (state) => {
			// center of Turkey, default lat and long
			state.lat = 38.963745;
			state.long = 35.24332;
		},


		// After form submit, composed form data shall be set, proceed to be set to true, and closest distance shall be calculated - this reducer is trigger on (compontents/Map/handleSubmit())
		setSpectrumData: (state, action) => {
			for (let [key, value] of Object.entries(action.payload)) {

				console.log(key);


				if (key === 'formLat' || key === 'formLong') {
					value = Number(value);
				}

				state.formDataComposite[key] = value;
			}
			state.proceed = true;

			console.log('lajshfalhfa', current(state));

		},

		clearSpectrumData: (state) => {
			state.formDataComposite = {
				formLat: null,
				formLong: null,
				formGML: null,
				formGC: null,
			}
			state.proceed = false
		},

		// Final step before plotting VERS and HERS - if closestDistance !== null && proceed === true ==> PLOT...
		setClosestDistance: (state, action) => {
			const cDistance = action.payload.closestDistance;
			state.closestDistance = cDistance
		}
	},
});

export const { setCoords, setSpectrumData, clearCoords, clearSpectrumData } = mapDataSlice.actions;

export const selectMapData = (state) => state.mapData;

export default mapDataSlice.reducer;
