import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { InputField, SelectField } from '../../core/components/ui';
import { ModalTramite, TablaTramite } from '../../features/licencias/componentes';
import { useActions } from '../../features/licencias/context';
import { useLicencias } from '../../features/licencias/hooks/useLicencias';

const headersTramite = ['Fecha', 'Negocio', 'RUC', 'Estado', 'Acciones'];

export const TramitarLicenciasPage = () => {
	const { isModalOpen } = useActions();
	const [inputFilter, setInputFilter] = useState('');
	const [selectOption, setSelectOption] = useState('todos');
	const { data = [], isLoading, error } = useLicencias();

    const dataFilter = useMemo(() => {
        return data.filter((item) => {
            const filterByOption = selectOption === 'todos' || selectOption === item.estado.toLowerCase();
            const value = inputFilter.toLowerCase();
            const filterByInput = item.negocio.toLowerCase().includes(value) || item.ruc.toLowerCase().includes(value);
            return filterByOption && filterByInput;
        });
    }, [data, inputFilter, selectOption]);

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
				<TablaTramite headers={headersTramite} data={dataFilter} isLoading={isLoading} error={error} />
			</div>
			{isModalOpen && <ModalTramite />}
		</>
	);
};
