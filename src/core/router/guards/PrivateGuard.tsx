import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { JwtPayload, jwtDecode } from 'jwt-decode';

export const PrivateGuard: React.FC = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const validateToken = () => {
		const token = localStorage.getItem('authToken');
		if (!token) {
			setIsAuthenticated(false);
			return;
		}
		try {
			const payload = jwtDecode<JwtPayload>(token);
			if (Date.now() >= payload.exp! * 1000) {
				setIsAuthenticated(false);
				return;
			}
			setIsAuthenticated(true);
		} catch (error) {
			console.error('Error validando token:', error);
			setIsAuthenticated(false);
		}
	};

	useEffect(() => {
		validateToken();
	}, []);

	return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};
