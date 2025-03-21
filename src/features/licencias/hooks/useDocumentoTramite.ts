import { useQuery } from '@tanstack/react-query';
import { getDocumentoTramite } from '../api/getDocumentoTramite';

export const useDocumentoTramite = (codigoPago: string) => {
	return useQuery<string|null, Error>({
		queryFn: () => getDocumentoTramite(codigoPago),
		queryKey: ['documento-tramite',codigoPago],
		enabled: !!codigoPago
	});
};
