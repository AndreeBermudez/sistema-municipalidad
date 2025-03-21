import { axiosInstance } from '../../../core/config/api/axiosConfig';
import { BaseLicense, License } from '../models/Licencia';

export const completeLicense = async (id: number, dataLicencia: BaseLicense): Promise<License> => {
	console.log(id, dataLicencia);
	try {
		const response = await axiosInstance.put(`authentication/update/licencia-num/${id}`, dataLicencia);
		if (!response || response.status !== 200) {
			throw new Error('Error al actualizar licencia');
		}
		console.log(response.data);
		return response.data.data;
	} catch (error) {
		console.error(error);
		throw new Error('Ha ocurrido un error, intente nuevamente');
	}
};
