import { Navigate, Route, Routes } from 'react-router-dom';
import { PageNotFound } from '../../../pages/404/PageNotFound';
type RoutesProps = {
	children: React.ReactNode;
};
export const RoutesWithNotFound: React.FC<RoutesProps> = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<Navigate to={'/404'} />} />
			{/* Por mientas manejamos con 404 hasta implementar una pagina 404 */}
			<Route path='/404' element={<PageNotFound/>} />
		</Routes>
	);
};
