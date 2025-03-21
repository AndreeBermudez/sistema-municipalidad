import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoMunicipalidad from '../../assets/logo-municipalidad.svg';

export const PageNotFound = () => {
	return (
		<div className='bg-gradient-to-b from-white to-gray-100 flex items-center justify-center w-full h-screen'>
			<div className='max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden'>
				<div className='h-24 bg-blue-600 flex items-center justify-center'>
					<div className='text-white text-lg font-semibold'>
						<img src={LogoMunicipalidad} alt='Logo Municipalidad de Nuevo Chimbote' className='h-16 w-auto' />
						<span className='sr-only'>Municipalidad de Nuevo Chimbote</span>
					</div>
				</div>

				<div className='p-8 text-center'>
					<h1 className='text-6xl font-bold text-blue-600'>404</h1>
					<h2 className='mt-4 text-2xl font-semibold text-gray-800'>Página no encontrada</h2>
					<p className='mt-2 text-gray-600'>
						Lo sentimos, la página que estás buscando no existe o ha sido movida.
					</p>

					<Link
						to={'/login'}
						className='mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'>
						<ArrowLeft className='mr-2 h-4 w-4' />
						Volver al inicio
					</Link>
				</div>

				<div className='bg-blue-100 py-3 px-4 text-center text-sm text-blue-800'>
					Municipalidad de Nuevo Chimbote © {new Date().getFullYear()}
				</div>
			</div>
		</div>
	);
};
