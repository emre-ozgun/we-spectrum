import React from 'react';
import { data } from './data';

import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>{data.length}</h1>
		</div>
	);
}

export default App;
