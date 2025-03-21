import { createContext } from 'react';

type ActionsContextProps = {
	isModalOpen: boolean;
	selectedLicenciaId: number | null;
	openModal: () => void;
	closeModal: () => void;
	openModalLicense: (id: number) => void;
	downloadTramitarLicencias: () => void;
	downloadRegistroLicencias: () => void;
	code: string;
	setCode: (value: string) => void;
	handleConfirm: () => void;
	hideInput: boolean;
	hideInputField: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const ActionsContext = createContext<ActionsContextProps>({} as ActionsContextProps);
