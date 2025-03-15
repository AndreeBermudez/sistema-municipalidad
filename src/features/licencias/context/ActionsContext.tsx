import { createContext } from 'react';

type ActionsContextProps = {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	downloadTramitarLicencias: () => void;
	downloadRegistroLicencias: () => void;
	code: string;
	setCode: (value: string) => void;
	handleConfirm: () => void;
	hideInput: boolean;
	hideInputField: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const ActionsContext = createContext<ActionsContextProps>({} as ActionsContextProps);