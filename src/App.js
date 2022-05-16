import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import './App.css';
import Map from './components/google-maps/Map';

function App() {
	// main page - currently no route protection (auth to be implemented...)

	return (
		<>
			<Header />
			<Map />
		</>
	);
}

export default App;
