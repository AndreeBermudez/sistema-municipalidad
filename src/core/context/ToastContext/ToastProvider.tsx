import { toast, Toaster } from 'sonner';
import { ToastContext } from './ToastContext';

type ToastProviderProps = {
	children: React.ReactNode;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	const loginNotification = () => {
		toast.success('Bienvenido al sistema');
	};

	const successNotification = (message: string) => {
		toast.success(message);
	};

	const registroNotification = () => {
		toast.info('Registro exitoso');
	};

	const errorNotification = (message: string = 'Ha sucedido un error') => {
		toast.error(message);
	};

	const dowloadNotification = () => {
		toast.success('El archivo se ha descargado correctamente');
	};
	return (
		<ToastContext.Provider
			value={{
				loginNotification,
				registroNotification,
				successNotification,
				errorNotification,
				dowloadNotification,
			}}>
			<Toaster richColors position='top-right' style={{ padding: '20px', color: '#1F7EBE' }} />
			{children}
		</ToastContext.Provider>
	);
};
