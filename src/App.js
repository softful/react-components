import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeDislike from './Components/LikeDislike';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<LikeDislike />
			</header>
		</div>
	);
}

export default App;
