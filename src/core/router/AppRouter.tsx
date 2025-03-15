import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound } from './components/RoutesWithNotFound';
import { LoginPage } from '../../pages/LoginPage';
import { PrivateRouter } from './PrivateRouter';
import { PrivateGuard } from './guards/PrivateGuard';

export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<RoutesWithNotFound>
				<Route path='/' element={<Navigate to='/login' />} />
				<Route path='/login' element={<LoginPage />} />
				<Route element={<PrivateGuard />}>
					{/* Cualquier ruta que empiece con /admin/ va a ser privada y 
					    manejada por PrivateRouter */}
					<Route path='/admin/*' element={<PrivateRouter />} />
				</Route>
			</RoutesWithNotFound>
		</BrowserRouter>
	);
};
