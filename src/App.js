import React from 'react';

import Header from './components/header/Header';
import Map from './components/google-maps/Map';
import ClosestDistance from './components/closest-distance/ClosestDistance';
import LoginForm from './components/auth/LoginForm';
import { useSelector } from 'react-redux';
import { selectAuth } from './features/mapData/authSlice';
import './App.css';

function App() {


	const { grantAccess } = useSelector(selectAuth);


	console.log(grantAccess);


	if (!grantAccess) {
		return (
			<>
				<Header />
				<LoginForm />
			</>
		)
	}


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
