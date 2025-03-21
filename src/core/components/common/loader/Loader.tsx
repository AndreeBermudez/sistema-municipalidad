import logoMunicipalidad from '../../../../assets/logo-municipalidad.svg';
import { useEffect, useState } from 'react';

export const Loader = () => {
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		setFadeIn(true);
	}, []);

	return (
		<div className='fixed inset-0 bg-gradient-to-b from-white to-gray-100 flex items-center justify-center z-50'>
			<div
				className={`flex flex-col items-center transform transition-all duration-700 ease-in-out ${
					fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
				}`}>
				<div className='relative mb-6'>
					<div className='absolute -inset-1 bg-blue-50 rounded-full blur-md opacity-40'></div>
					<img src={logoMunicipalidad} alt='Logo Municipalidad' className='relative h-20 w-auto drop-shadow-lg' />
				</div>

				<div
					className='animate-spin rounded-full h-7 w-7 border-3 border-t-blue-600 border-r-transparent border-b-blue-600 border-l-transparent 
                        shadow-[0_0_10px_rgba(37,99,235,0.2)] animate-pulse-light'>
                </div>
			</div>
		</div>
	);
};
