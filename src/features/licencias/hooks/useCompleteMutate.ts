import { useMutation, useQueryClient } from '@tanstack/react-query';
import { completeLicense } from '../api';
import { BaseLicense } from '../models/Licencia';
import { User } from '../../auth/models/types';

export const useCompleteMutate = () => {
	const user = JSON.parse(localStorage.getItem('user') || '{}') as User;
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: BaseLicense }) =>
			completeLicense(id, { ...data, trabajadorId: user.idTrabajador }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['licencias'] });
		},
	});
};
