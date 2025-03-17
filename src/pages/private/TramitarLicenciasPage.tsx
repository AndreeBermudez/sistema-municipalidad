import { Search } from 'lucide-react';
import { InputField, SelectField } from '../../core/components/ui';
import { LicenciaData, ModalTramite, TablaTramite } from '../../features/licencias/componentes';
import { useActions } from '../../features/licencias/context';
import { useEffect, useState } from 'react';

const headersTramite = ['Fecha', 'Negocio', 'RUC', 'Estado', 'Acciones'];

const data: LicenciaData[] = [
	{ id: 1, fecha: '01/01/2023', nombreNegocio: 'Tienda ABC', ruc: '12345678901', estado: 'Pendiente' },
	{ id: 2, fecha: '02/01/2023', nombreNegocio: 'Restaurante XYZ', ruc: '23456789012', estado: 'Vigente' },
	{ id: 3, fecha: '03/01/2023', nombreNegocio: 'Farmacia 123', ruc: '34567890123', estado: 'Pendiente' },
	{ id: 4, fecha: '04/01/2023', nombreNegocio: 'Supermercado QWERTY', ruc: '45678901234', estado: 'Vigente' },
	{ id: 5, fecha: '05/01/2023', nombreNegocio: 'Cafetería Java', ruc: '56789012345', estado: 'Pendiente' },
	{ id: 6, fecha: '06/01/2023', nombreNegocio: 'Panadería Dulce', ruc: '67890123456', estado: 'Vigente' },
	{ id: 7, fecha: '07/01/2023', nombreNegocio: 'Taller Mecánico', ruc: '78901234567', estado: 'Pendiente' },
	{ id: 8, fecha: '08/01/2023', nombreNegocio: 'Librería Lectura', ruc: '89012345678', estado: 'Vigente' },
	{ id: 9, fecha: '09/01/2023', nombreNegocio: 'Gimnasio Fitness', ruc: '90123456789', estado: 'Pendiente' },
	{ id: 10, fecha: '10/01/2023', nombreNegocio: 'Floristería Rosas', ruc: '01234567890', estado: 'Vigente' },
	{ id: 11, fecha: '11/01/2023', nombreNegocio: 'Peluquería Estilo', ruc: '12345098765', estado: 'Pendiente' },
	{ id: 12, fecha: '12/01/2023', nombreNegocio: 'Óptica Visión', ruc: '23456109876', estado: 'Vigente' },
	{ id: 13, fecha: '13/01/2023', nombreNegocio: 'Joyería Brillante', ruc: '34567210987', estado: 'Pendiente' },
	{ id: 14, fecha: '14/01/2023', nombreNegocio: 'Mueblería Hogar', ruc: '45678321098', estado: 'Vigente' },
	{ id: 15, fecha: '15/01/2023', nombreNegocio: 'Electrónica Tech', ruc: '56789432109', estado: 'Pendiente' },
	{ id: 16, fecha: '16/01/2023', nombreNegocio: 'Ropa Moda', ruc: '67890543210', estado: 'Vigente' },
	{ id: 17, fecha: '17/01/2023', nombreNegocio: 'Zapatería Calzado', ruc: '78901654321', estado: 'Pendiente' },
	{ id: 18, fecha: '18/01/2023', nombreNegocio: 'Carnicería Fresca', ruc: '89012765432', estado: 'Vigente' },
	{ id: 19, fecha: '19/01/2023', nombreNegocio: 'Pescadería Mar', ruc: '90123876543', estado: 'Pendiente' },
	{ id: 20, fecha: '20/01/2023', nombreNegocio: 'Ferretería Herramientas', ruc: '01234987654', estado: 'Vigente' },
];

export const TramitarLicenciasPage = () => {
	const { isModalOpen } = useActions();
	const [inputFilter, setInputFilter] = useState('');
	const [selectOption, setSelectOption] = useState('todos');
	const [dataFilter, setDataFilter] = useState(data);

	useEffect(() => {
		const dataFilter = data.filter((item) => {
			const filterByOption = selectOption === 'todos' || selectOption === item.estado.toLowerCase()
			const value = inputFilter.toLowerCase();
			const filterByInput = item.nombreNegocio.toLowerCase().includes(value) || item.ruc.toLowerCase().includes(value);
			return filterByOption && filterByInput
		});
		setDataFilter(dataFilter);
	}, [inputFilter,selectOption]);

	return (
		<>
			<div className='flex gap-4 items-center justify-between bg-blue-600 px-4 py-5 rounded-t-lg'>
				<h2 className='text-xl md:text-2xl font-bold text-primary text-white'>Tramitar Licencia</h2>
				<div className='flex gap-4'>
					<div className='relative'>
						<InputField
							name='filtro'
							placeholder='Buscar...'
							inputStyles='pl-10 pr-4 py-2 bg-white'
							value={inputFilter}
							onChange={(e) => setInputFilter(e.target.value)}
						/>
						<Search className='h-5 w-5 text-gray-400 absolute left-3 -translate-y-7' />
					</div>
					<SelectField
						value={selectOption}
						onChange={(e) => setSelectOption(e.target.value)}
						name='b-estado'
						className='bg-white text-gray-700'
						options={[
							{ value: 'todos', label: 'Todos los estados' },
							{ value: 'pendiente', label: 'Pendiente' },
							{ value: 'vigente', label: 'Vigente' },
						]}></SelectField>
				</div>
			</div>
			<div className='w-full overflow-x-auto '>
				<TablaTramite headers={headersTramite} data={dataFilter} />
			</div>
			{isModalOpen && <ModalTramite />}
		</>
	);
};
