import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicGuard = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const verify = () => {
		const token = localStorage.getItem('authToken');
		if (token) {
			setIsAuthenticated(true);
			return;
		}
		setIsAuthenticated(false);
	};

	useEffect(() => {
		verify();
	}, []);

	return !isAuthenticated ? <Outlet /> : <Navigate to='/admin/' />;
};
