import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	lat: 38.963745,
	long: 35.24332,
};

export const mapDataSlice = createSlice({
	name: 'mapData',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setCoords: (state, action) => {
			state.lat = action.payload.lat;
			state.long = action.payload.lng;
		},
	},
});

export const { setCoords } = mapDataSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMapData = (state) => state.mapData;

export default mapDataSlice.reducer;
