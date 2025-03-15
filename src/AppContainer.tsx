import { App } from './App';
import { AppRouter } from './core/router/AppRouter';
import { ToastProvider } from './core/context';

export const AppContainer: React.FC = () => {
	return (
			<App>
				<ToastProvider>
					<AppRouter />
				</ToastProvider>
			</App>
	);
};
