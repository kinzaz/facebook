import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { LoginPage } from './pages/login';
import { Profile } from './pages/profile';

const App = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
};

export default App;
