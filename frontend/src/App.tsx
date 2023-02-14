import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Profile } from './pages/profile';

const App = (): JSX.Element => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</div>
	);
};

export default App;
