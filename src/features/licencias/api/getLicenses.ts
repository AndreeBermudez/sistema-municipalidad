import { axiosInstance } from '../../../core/config/api/axiosConfig';
import { ReporteLicencia } from '../models/ReporteLicencia';

export const getLicenses = async (): Promise<ReporteLicencia[]> => {
	try {
		const response = await axiosInstance.get('authentication/all/licencia-tramite');
		if (!response || response.status !== 200) {
			throw new Error('Error al traer las licencias');
		}
		const data = response.data.data;
		return data;
	} catch (error) {
		console.error(error);
		throw new Error('Error en el servidor');
	}
};
