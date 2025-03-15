import { createContext } from 'react';

export type ToastContextProps = {
	loginNotification : () => void;
	registroNotification : () => void;
	successNotification : (message: string) => void;
	errorNotification : (message: string) => void;
	dowloadNotification : () => void;
};

export const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);
