import React from 'react';

import Header from './components/header/Header';
import Map from './components/google-maps/Map';
import ClosestDistance from './components/closest-distance/ClosestDistance';
import './App.css';

function App() {
	// main page - currently no route protection (auth to be implemented...)

	return (
		<>
			<Header />
			<Map />
			<ClosestDistance />
		</>
	);
}

export default App;
