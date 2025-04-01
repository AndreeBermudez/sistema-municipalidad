import { Search } from 'lucide-react';
import { InputField, SelectField } from '../../core/components/ui';
import { TablaRegistro } from '../../features/licencias/componentes';
import { useEffect, useState } from 'react';
import { ReportePago } from '../../features/pago/models/ReportePago';
import { useReportePagoQuery } from '../../features/pago/hooks/useReportePagoQuery';

const headersRegister = ['Fecha', 'Solicitante', 'DNI', 'Codigo Pago', 'Estado', 'Acciones'];

export const FiltrarLicenciasPage: React.FC = () => {
	const [dataFilter, setDataFilter] = useState<ReportePago[]>([]);
	const [selectOption, setSelectOption] = useState('todos');
	const [inputFilter, setInputFilter] = useState('');

	const { data = [], isLoading, error } = useReportePagoQuery();

	useEffect(() => {
		if (data && data.length) {
			const filteredData = data.filter((item) => {
				const filterByOption = selectOption === 'todos' || selectOption === item.estado.toLowerCase();
				const value = inputFilter.toLowerCase();
				const filterByInput =
					item.solicitante.toLowerCase().includes(value) || item.codigoPago.toLowerCase().includes(value);
				return filterByOption && filterByInput;
			});
			setDataFilter(filteredData);
		}
	}, [inputFilter, selectOption, data]);

	return (
		<>
			<div className='flex gap-4 items-center justify-between bg-blue-600 px-4 py-5 rounded-t-lg'>
				<h2 className='text-xl md:text-2xl font-bold text-primary text-white'>Filtrar Licencia</h2>
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
						name='b-estado'
						value={selectOption}
						onChange={(e) => setSelectOption(e.target.value)}
						className='bg-white text-gray-700'
						options={[
							{ value: 'todos', label: 'Todos los estados' },
							{ value: 'activo', label: 'Activo' },
							{ value: 'registrado', label: 'Registrado' },
						]}></SelectField>
				</div>
			</div>
			<div className='w-full overflow-x-auto'>
				<TablaRegistro headers={headersRegister} data={dataFilter} isLoading={isLoading} error={error} />
			</div>
		</>
	);
};
