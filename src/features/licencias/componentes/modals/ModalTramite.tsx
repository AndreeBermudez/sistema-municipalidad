import { useState } from 'react';
import { Button, InputField, SelectField } from '../../../../core/components/ui';
import { useActions } from '../../context';
import { initialBaseLicense } from '../../models/Licencia';
import { useCompleteMutate } from '../../hooks/useCompleteMutate';
import { useToast } from '../../../../core/context';

export const ModalTramite: React.FC = () => {
	const { closeModal, downloadTramitarLicencias, selectedLicenciaId } = useActions();
	const { successNotification, errorNotification } = useToast();
	const [form, setForm] = useState(initialBaseLicense);
	const completeMutation = useCompleteMutate();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: name === 'nivelDeRiesgoId' ? parseInt(value) : value,
		});
	};

	const completarLicencia = () => {
		if (!selectedLicenciaId) {
			console.error('No se ha seleccionado una licencia');
			return;
		}
		if (!form.numeroExpediente || !form.numeroResolucion || !form.numeroLicencia || !form.nivelDeRiesgoId) {
			alert('Por favor complete todos los campos');
			return;
		}
		completeMutation.mutate(
			{ id: selectedLicenciaId, data: form },
			{
				onSuccess: () => {
					closeModal();
					successNotification('La licencia ha sido actualizada con éxito');
				},
				onError: (error) => {
					console.error('Error al completar la licencia:', error);
					errorNotification('Ha sucedido algun problema en el servidor');
				},
			}
		);
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black/50'>
			<div className='bg-white rounded-lg max-w-96 w-full mx-6 p-10 flex flex-col gap-[18px]'>
				<h2 className='text-lg font-bold'>Completar Licencia</h2>
				<InputField
					placeholder={'Nro de expediente'}
					name={'numeroExpediente'}
					value={form.numeroExpediente}
					onChange={handleInput}
				/>
				<InputField
					placeholder={'Nro de resolución'}
					name={'numeroResolucion'}
					value={form.numeroResolucion}
					onChange={handleInput}
				/>
				<InputField
					placeholder={'Nro de licencia'}
					name={'numeroLicencia'}
					value={form.numeroLicencia}
					onChange={handleInput}
				/>
				<SelectField
					name='nivelDeRiesgoId'
					value={form.nivelDeRiesgoId.toString()} // Convertir a string para el select
					onChange={handleInput}
					options={[
						{ value: 'nivel', label: 'Nivel de Riesgo' },
						{ value: '1', label: 'Alto' },
						{ value: '2', label: 'Medio' },
						{ value: '3', label: 'Bajo' },
					]}
				/>
				<div className='flex justify-between gap-3'>
					<Button className={'shadow-md'} onClick={closeModal}>
						Cancelar
					</Button>
					<Button
						className={'bg-[#1F7EBE] text-white'}
						onClick={completarLicencia}
						disabled={completeMutation.isPending}>
						{completeMutation.isPending ? 'Guardando...' : 'Guardar'}
					</Button>
				</div>
			</div>
		</div>
	);
};
