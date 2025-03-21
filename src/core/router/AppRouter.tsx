import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound } from './components/RoutesWithNotFound';
import { LoginPage } from '../../pages/LoginPage';
import { PrivateRouter } from './PrivateRouter';
import { PrivateGuard } from './guards/PrivateGuard';
import { PublicGuard } from './guards/PublicGuard';

export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route element={<PublicGuard />}>
					<Route path='/login' element={<LoginPage />} />
				</Route>
				<Route element={<PrivateGuard />}>
					{/* Cualquier ruta que empiece con /admin/ va a ser privada y 
					    manejada por PrivateRouter */}
					<Route path='/admin/*' element={<PrivateRouter />} />
				</Route>
			</RoutesWithNotFound>
		</BrowserRouter>
	);
};
