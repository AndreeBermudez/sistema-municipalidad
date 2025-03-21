import { useQuery } from '@tanstack/react-query';
import { ReportePago } from '../models/ReportePago';
import { getAllPagos } from '../api/getAllPagos';

export const useReportePagoQuery = () => {
	return useQuery<ReportePago[], Error>({
		queryFn: getAllPagos,
		queryKey: ['pagos'],
	});
};
