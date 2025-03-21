import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppContainer } from './AppContainer';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions:{
		queries:{
			staleTime: 5*60*100,
			refetchOnWindowFocus: false,
			refetchOnMount:false
		}
	}
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppContainer />
		</QueryClientProvider>
	</StrictMode>
);
