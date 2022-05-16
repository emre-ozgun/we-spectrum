import { configureStore } from '@reduxjs/toolkit';
import mapDataReducer from '../features/mapData/mapDataSlice';

export const store = configureStore({
	reducer: {
		mapData: mapDataReducer,
	},
});
