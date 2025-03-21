import { useQuery } from '@tanstack/react-query';
import { getLicenses } from '../api/getLicenses';
import { ReporteLicencia } from '../models/ReporteLicencia';

export const useLicencias = () => {
	return useQuery<ReporteLicencia[], Error>({
		queryFn: getLicenses,
		queryKey: ['licencias'],
	});
};