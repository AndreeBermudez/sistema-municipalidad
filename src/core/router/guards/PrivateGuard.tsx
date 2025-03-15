import { Navigate, Outlet } from 'react-router-dom';

export const PrivateGuard: React.FC = () => {
	// Hardcodeado por mientas para validar el login
	const isAuthenticated: boolean = true;
	return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};
