import { Search } from 'lucide-react';
import { InputField, SelectField } from '../../core/components/ui';
import { TablaRegistro } from '../../features/licencias/componentes';

export type DataRegistro = {
	id: number;
	fecha: string;
	solicitante: string;
	codigoPago: string; 
	estado: 'Activo' | 'Vencido';
};

const headersRegister = ['Fecha', 'Solicitante', 'Codigo Pago', 'Estado', 'Acciones'];

const data: DataRegistro[] = [
	{ id: 1, fecha: '01/01/2023', solicitante: 'Juan Pérez', codigoPago: '001', estado: 'Activo' },
	{ id: 2, fecha: '02/01/2023', solicitante: 'María Gómez', codigoPago: '002', estado: 'Vencido' },
	{ id: 3, fecha: '03/01/2023', solicitante: 'Carlos López', codigoPago: '003', estado: 'Activo' },
	{ id: 4, fecha: '04/01/2023', solicitante: 'Ana Martínez', codigoPago: '004', estado: 'Vencido' },
	{ id: 5, fecha: '05/01/2023', solicitante: 'Luis Rodríguez', codigoPago: '005', estado: 'Activo' },
	{ id: 6, fecha: '06/01/2023', solicitante: 'Sofía Díaz', codigoPago: '006', estado: 'Vencido' },
	{ id: 7, fecha: '07/01/2023', solicitante: 'Pedro Sánchez', codigoPago: '007', estado: 'Activo' },
	{ id: 8, fecha: '08/01/2023', solicitante: 'Laura Fernández', codigoPago: '008', estado: 'Vencido' },
	{ id: 9, fecha: '09/01/2023', solicitante: 'Jorge Ramírez', codigoPago: '009', estado: 'Activo' },
	{ id: 10, fecha: '10/01/2023', solicitante: 'Carmen Torres', codigoPago: '010', estado: 'Vencido' },
	{ id: 11, fecha: '11/01/2023', solicitante: 'Miguel Reyes', codigoPago: '011', estado: 'Activo' },
	{ id: 12, fecha: '12/01/2023', solicitante: 'Elena Vargas', codigoPago: '012', estado: 'Vencido' },
	{ id: 13, fecha: '13/01/2023', solicitante: 'Ricardo Castro', codigoPago: '013', estado: 'Activo' },
	{ id: 14, fecha: '14/01/2023', solicitante: 'Isabel Ortega', codigoPago: '014', estado: 'Vencido' },
	{ id: 15, fecha: '15/01/2023', solicitante: 'Fernando Morales', codigoPago: '015', estado: 'Activo' },
	{ id: 16, fecha: '16/01/2023', solicitante: 'Lucía Rojas', codigoPago: '016', estado: 'Vencido' },
	{ id: 17, fecha: '17/01/2023', solicitante: 'Oscar Herrera', codigoPago: '017', estado: 'Activo' },
	{ id: 18, fecha: '18/01/2023', solicitante: 'Patricia Medina', codigoPago: '018', estado: 'Vencido' },
	{ id: 19, fecha: '19/01/2023', solicitante: 'Roberto Guzmán', codigoPago: '019', estado: 'Activo' },
	{ id: 20, fecha: '20/01/2023', solicitante: 'Adriana Silva', codigoPago: '020', estado: 'Vencido' },
];

export const FiltrarLicenciasPage: React.FC = () => {
	return (
		<>
			<div className='flex gap-4 items-center justify-between bg-blue-600 px-4 py-5 rounded-t-lg'>
				<h2 className='text-xl md:text-2xl font-bold text-primary text-white'>Filtrar Licencia</h2>
				<div className='flex gap-4'>
					<div className='relative'>
						<InputField name='filtro' placeholder='Buscar...' inputStyles='pl-10 pr-4 py-2 bg-white' />
						<Search className='h-5 w-5 text-gray-400 absolute left-3 -translate-y-7' />
					</div>
					<SelectField
						name='b-estado'
						className='bg-white text-gray-700'
						options={[
							{ value: 'todos', label: 'Todos los estados' },
							{ value: 'activo', label: 'Activo' },
							{ value: 'vencido', label: 'Vencido' },
						]}></SelectField>
				</div>
			</div>
			<div className='w-full overflow-x-auto'>
				<TablaRegistro headers={headersRegister} data={data} />
			</div>
		</>
	);
};

