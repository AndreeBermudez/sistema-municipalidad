import { Navigate, Route } from 'react-router-dom';
import { RoutesWithNotFound } from './components/RoutesWithNotFound';
import { RegistrarSolicitantePage } from '../../pages/private/RegistrarSolicitantePage'; 
import { FiltrarLicenciasPage } from '../../pages/private/FiltrarLicenciasPage'; 
import { TramitarLicenciasPage } from '../../pages/private/TramitarLicenciasPage'; 
import { AdminLayout } from '../layout/AdminLayout'; 

export const PrivateRouter: React.FC = () => {
	return (
		<RoutesWithNotFound>
			<Route path='/' element={<Navigate to='registro' />} />
			<Route element={<AdminLayout />}>
				<Route path='registro' element={<RegistrarSolicitantePage />} />
				<Route path='filtrar' element={<FiltrarLicenciasPage />} />
				<Route path='tramite' element={<TramitarLicenciasPage />} />
				<Route path='historial' element={<div>Comming Soon</div>} />
			</Route>
		</RoutesWithNotFound>
	);
};
