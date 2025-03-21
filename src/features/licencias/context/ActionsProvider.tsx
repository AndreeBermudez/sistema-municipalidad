import { FormEvent, useState } from 'react';
import { useToast } from '../../../core/context';
import { toast } from 'sonner';
import { ActionsContext } from './ActionsContext';

type ActionsProviderProps = {
	children: React.ReactNode;
};

export const ActionsProvider: React.FC<ActionsProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedLicenciaId, setSelectedLicenciaId] = useState<number | null>(null);
	const [code, setCode] = useState<string>('');
	const { dowloadNotification } = useToast();
	const [hideInput, setHideInput] = useState(false); //Por mientras para ocultar inputs

	const handleConfirm = () => {
		setIsModalOpen(false);
		toast.success('Registrado con éxito', {
			style: { padding: '20px', color: '#1F7EBE' },
		});
		setCode('');
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	const openModalLicense = (id: number) => {
		setSelectedLicenciaId(id);
		setIsModalOpen(true);
	};
	// Función de descarga para RegistroLicencias
	const downloadRegistroLicencias = () => {
		dowloadNotification();
	};
	// Función de descarga para TramitarLicencias
	const downloadTramitarLicencias = () => {
		dowloadNotification();
		closeModal();
	};
	//Funcion para el input
	const hideInputField = (e: FormEvent<HTMLInputElement>) => {
		const target = e.target;
		if (target instanceof HTMLInputElement) {
			setHideInput(target.checked);
		}
	};

	return (
		<ActionsContext.Provider
			value={{
				isModalOpen,
				openModal,
				closeModal,
				downloadTramitarLicencias,
				downloadRegistroLicencias,
				openModalLicense,
				selectedLicenciaId,
				code,
				setCode,
				handleConfirm,
				hideInput,
				hideInputField,
			}}>
			{children}
		</ActionsContext.Provider>
	);
};
