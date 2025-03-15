import { Button, InputField, SelectField } from '../../../../core/components/ui';
import { useActions } from '../../context';

export const ModalTramite:React.FC = () => {
	const { closeModal, downloadTramitarLicencias } = useActions();

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black/50'>
			<div className='bg-white rounded-lg max-w-96 w-full mx-6 p-10 flex flex-col gap-[18px]'>
				<h2 className='text-lg font-bold'>Completar Licencia</h2>
				<InputField placeholder={'Nro de expediente'} name={'nro-expediente'} />
				<InputField placeholder={'Nro de resolución'} name={'nro-resolucion'} />
				<InputField placeholder={'Nro de licencia'} name={'nro-licencia'} />
				<SelectField
					name='b-estado'
					options={[
						{ value: 'nivel', label: 'Nivel de Riesgo' },
						{ value: 'alto', label: 'Alto'},
						{ value: 'medio', label: 'Medio' },
						{ value: 'bajo', label: 'Bajo' },
					]}
				/>
				<div className='flex justify-between gap-3'>
					<Button className={'shadow-md'} onClick={closeModal}>
						Cancelar
					</Button>
					<Button className={'bg-[#1F7EBE] text-white'} onClick={downloadTramitarLicencias}>
						Guardar y generar PDF
					</Button>
				</div>
			</div>
		</div>
	);
};
