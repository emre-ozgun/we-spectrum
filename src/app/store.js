import { configureStore } from '@reduxjs/toolkit';
import mapDataReducer from '../features/mapData/mapDataSlice';
import authSliceReducer from '../features/mapData/authSlice';

export const store = configureStore({
	reducer: {
		mapData: mapDataReducer,
		auth: authSliceReducer
	},
});
