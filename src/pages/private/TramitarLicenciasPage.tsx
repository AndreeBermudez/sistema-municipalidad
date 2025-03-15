import { Button, InputField } from '../../core/components/ui';
import { SelectField } from '../../core/components/ui';
import { useActions } from '../../features/licencias/context';
import { ModalTramite, TablaTramite } from '../../features/licencias/componentes';

const headersProcess = [
	{
		name: 'Fecha',
		key: 'fecha',
	},
	{
		name: 'Cod. Zonificacion',
		key: 'codZonificacion',
	},
	{
		name: 'Cod. Pago',
		key: 'codPago',
	},
	{
		name: 'DNI',
		key: 'dni',
	},
	{
		name: 'Estado',
		key: 'estado',
	},
	{
		name: 'Documento',
		key: 'documento',
	},
];

const data = [
	{
		id: 1,
		fecha: '12/12/2021',
		codZonificacion: '556020',
		codPago: '123456',
		dni: '1234567890',
		estado: 'En trámite',
	},
	{
		id: 2,
		fecha: '12/12/2021',
		codZonificacion: '556021',
		codPago: '123456',
		dni: '1234567890',
		estado: 'Finalizado',
	},
];

export const TramitarLicenciasPage = () => {
	const { isModalOpen } = useActions();
	return (
		<>
			<h2 className='text-xl md:text-2xl font-bold text-primary'>Licencias en trámite</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 text-sm gap-7'>
				<InputField type='text' name='b-codigo' placeholder='Buscar por código' />
				<InputField type='text' name='b-codigo' placeholder='Buscar por RUC' />
				<SelectField
					name='b-estado'
					options={[
						{ value: 'todos', label: 'Todos los estados' },
						{ value: 'tramite', label: 'En trámite' },
						{ value: 'finalizado', label: 'Finalizado' },
					]}></SelectField>
			</div>
			<div>
				<Button className={'bg-[#EEEDED] text-[#677172] shadow-md'}>Limpiar Campos</Button>
			</div>
			<div className='w-full overflow-x-auto '>
				<TablaTramite headers={headersProcess} data={data} />
			</div>
			{isModalOpen && <ModalTramite />}
		</>
	);
};
