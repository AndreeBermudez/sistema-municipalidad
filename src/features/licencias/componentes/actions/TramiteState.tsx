import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { ColumnActions } from '../../../../core/components/common/table';

export const TramiteState = ({ estado }: { estado: string }) => {
	const getEstadoProps = () => {
		switch (estado) {
			case 'PENDIENTE':
				return {
					className:
						'inline-flex items-center px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm',
					icon: <Clock className='h-4 w-4 mr-1.5' />,
					label: 'Pendiente',
				};
			case 'VIGENTE':
				return {
					className:
						'inline-flex items-center px-2.5 py-1 rounded-full bg-green-100 text-green-800 font-medium text-sm',
					icon: <CheckCircle2 className='h-4 w-4 mr-1.5' />,
					label: 'Vigente',
				};
			case 'REGISTRADO':
				return {
					className:
						'inline-flex items-center px-2.5 py-1 rounded-full bg-red-100 text-red-800 font-medium text-sm',
					icon: <XCircle className='h-4 w-4 mr-1.5' />,
					label: 'Vencido',
				};
			case 'ACTIVO':
				return {
					className:
						'inline-flex items-center px-2.5 py-1 rounded-full bg-green-100 text-green-800 font-medium text-sm',
					icon: <CheckCircle2 className='h-4 w-4 mr-1.5' />,
					label: 'Activo',
				};
			default:
				return {
					className:
						'inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 font-medium text-sm',
					icon: <XCircle className='h-4 w-4 mr-1.5' />,
					label: 'Desconocido',
				};
		}
	};
	const { className, icon, label } = getEstadoProps();

	return (
		<ColumnActions>
			<span className={className}>
				{icon}
				{label}
			</span>
		</ColumnActions>
	);
};
