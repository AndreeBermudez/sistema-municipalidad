import { Button, InputField } from '../../core/components/ui';
import { SelectField } from '../../core/components/ui';
import { TablaRegistro } from '../../features/licencias/componentes';

const headersRegister = [
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
		dni: '76784525',
		estado: 'Disponible',
	},
	{
		id: 2,
		fecha: '12/12/2021',
		codZonificacion: '556021',
		codPago: '123456',
		dni: '76784525',
		estado: 'Utilizado',
	},
];

export const FiltrarLicenciasPage: React.FC = () => {
	return (
		<>
			<h2 className='text-xl md:text-2xl font-bold text-primary'>Filtrar códigos de licencia</h2>
			<div className='grid gap-y-5 text-sm'>
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
					<InputField name='b-codigo' placeholder='Buscar por código' />
					<InputField type='date' name='b-fecha' />
					<SelectField
						name='b-estado'
						options={[
							{ value: 'todos', label: 'Todos' },
							{ value: 'disponible', label: 'Disponible' },
							{ value: 'utilizado', label: 'Utilizado' },
						]}
					/>
				</div>
			</div>
			<div className='flex justify-start gap-5'>
				<Button className={'bg-[#EEEDED] text-[#677172] shadow-md'}>Limpiar Campos</Button>
			</div>
			<div className='w-full overflow-x-auto'>
				<TablaRegistro headers={headersRegister} data={data} />
			</div>
		</>
	);
};
