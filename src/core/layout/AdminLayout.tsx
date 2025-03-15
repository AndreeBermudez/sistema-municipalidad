import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar'; 
import { ActionsProvider } from '../../features/licencias/context'; 

export const AdminLayout:React.FC = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<main className='flex-1 my-6 mx-6 sm:mx-9 overflow-x-auto'>
				<ActionsProvider>
					<Outlet />
				</ActionsProvider>
			</main>
		</div>
	);
};
