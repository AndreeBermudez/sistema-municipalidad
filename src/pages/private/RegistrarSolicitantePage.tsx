import { useState } from 'react';
import { CircleCheck, LoaderCircle } from 'lucide-react';
import { useCiudadanoMutate, useDniMutate } from '../../features/ciudadanos/hooks';
import { useZonificacionMutate } from '../../features/zonificacion/hooks';
import { usePagoMutate } from '../../features/pago/hooks';
import { Ciudadano } from '../../features/ciudadanos/models/types';
import { Button, InputField } from '../../core/components/ui';
import { useToast } from '../../core/context';
import { validateField } from '../../core/utils/validateField';

interface LicenseForm extends Ciudadano {
	codigoPago: string;
	codigoZonificacion: string;
	disabled: boolean;
}

const initialLicenseForm: LicenseForm = {
	ciudadanoId: undefined,
	dni: '',
	nombre: '',
	apellido: '',
	correoElectronico: '',
	telefono: '',
	codigoPago: '',
	codigoZonificacion: '',
	disabled: true,
};

export const RegistrarSolicitantePage: React.FC = () => {
	const { registroNotification, errorNotification, successNotification } = useToast();
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [loadindSubmit, setLoadindSubmit] = useState(false);
	const [licenseForm, setLicenseForm] = useState<LicenseForm>(initialLicenseForm);

	const { mutate: getDataByDni } = useDniMutate();
	const { mutateAsync: createCiudadano } = useCiudadanoMutate();
	const { mutateAsync: createCodigoPago } = usePagoMutate();
	const { mutateAsync: createCodigoZon } = useZonificacionMutate();

	const isFormValid = Object.values(errors).every((error) => !error);

	const handleSearchDataByDni = async (dni: string) => {
		getDataByDni(dni, {
			onSuccess: (data) => {
				setLicenseForm((prevState) => ({
					...prevState,
					nombre: data.nombres,
					apellido: `${data.apellidoPaterno} ${data.apellidoMaterno}`,
					disabled: false,
				}));
				successNotification('Datos obtenidos con éxito');
			},
			onError: (error) => {
				const errorMessage = error instanceof Error ? error.message : 'Error al obtener los datos del DNI';
				errorNotification(errorMessage);
				setLicenseForm((prevState) => ({
					...prevState,
					disabled: false,
				}));
			},
		});
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setLicenseForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
		const errorMessage = validateField(name, value);
		setErrors((prev) => ({ ...prev, [name]: errorMessage || '' }));
		if (name === 'dni' && value.length === 8 && !errorMessage) {
			handleSearchDataByDni(value);
		}
	};

	const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { codigoPago, codigoZonificacion, ...ciudadano } = licenseForm;
		try {
			setLoadindSubmit(true);
			const responseCiudadano = await createCiudadano(ciudadano);
			const idCiudadano = responseCiudadano.ciudadanoId;
			if (!idCiudadano) {
				throw new Error('No se pudo obtener el ID del ciudadano');
			}
			const responsePago = await createCodigoPago({ codigoPago: codigoPago, ciudadanoId: idCiudadano });
			const pagoId = responsePago.pagoId;
			if (!pagoId) {
				throw new Error('No se pudo obtener el ID del pago');
			}
			await createCodigoZon({
				estado: 'PENDIENTE',
				numeroCodigo: codigoZonificacion,
				ciudadanoDto: {
					dni: ciudadano.dni,
				},
			});
			registroNotification();
			setLicenseForm(initialLicenseForm);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Error al registrar los datos';
			errorNotification(errorMessage);
		} finally {
			setLoadindSubmit(false);
		}
	};

	return (
		<>
			<h2 className='text-xl md:text-2xl font-bold text-primary'>Registro de trámite de licencia</h2>
			<form className='text-sm' onSubmit={handleSubmitForm}>
				<div className='mb-5 flex items-start gap-5'>
					<InputField
						name='dni'
						placeholder='Ingrese el DNI'
						value={licenseForm.dni}
						onChange={handleInputChange}
						disabled={false}
						maxLength={8}
						error={errors.dni}
					/>
				</div>
				<div className='grid mb-5 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
					<InputField
						name='nombre'
						label='Nombre completo'
						placeholder='Ingrese su nombre'
						value={licenseForm.nombre}
						onChange={handleInputChange}
						disabled={licenseForm.disabled}
						error={errors.nombre}
					/>
					<InputField
						name='apellido'
						label='Apellidos'
						placeholder='Ingrese sus apellidos'
						value={licenseForm.apellido}
						onChange={handleInputChange}
						disabled={licenseForm.disabled}
						error={errors.apellido}
					/>
					<InputField
						name='telefono'
						label='Teléfono'
						placeholder='Ingrese su teléfono'
						value={licenseForm.telefono}
						onChange={handleInputChange}
						disabled={licenseForm.disabled}
						error={errors.telefono}
					/>
					<InputField
						name='correoElectronico'
						label='Correo Electrónico'
						placeholder='Ingrese su correo'
						value={licenseForm.correoElectronico}
						onChange={handleInputChange}
						disabled={licenseForm.disabled}
						error={errors.correoElectronico}
					/>
					<InputField
						name='codigoPago'
						label='Código de pago'
						placeholder='Ingrese el código de pago'
						value={licenseForm.codigoPago}
						onChange={handleInputChange}
						disabled={licenseForm.disabled}
						error={errors.codigoPago}
					/>
					<InputField
						name='codigoZonificacion'
						label='Código de Zonificación'
						placeholder='Ingrese el código de zonificación'
						value={licenseForm.codigoZonificacion}
						onChange={handleInputChange}
						disabled={licenseForm.disabled}
						error={errors.codigoZonificacion}
					/>
				</div>
				<div className='flex justify-start'>
					<Button
						type='submit'
						className='bg-primary text-white bg-[#1F7EBE]'
						disabled={!isFormValid || licenseForm.disabled}>
						Registrar{' '}
						{loadindSubmit ? <LoaderCircle className='animate-spin' size={18} /> : <CircleCheck size={18} />}
					</Button>
				</div>
			</form>
		</>
	);
};
