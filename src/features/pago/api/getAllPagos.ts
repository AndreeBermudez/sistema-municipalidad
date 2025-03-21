import { axiosInstance } from '../../../core/config/api/axiosConfig';
import { ReportePago } from '../models/ReportePago';

export const getAllPagos = async (): Promise<ReportePago[]> => {
	try {
		const response = await axiosInstance.get('authentication/all/ciudadano-pago');
		if (!response || response.status !== 200) {
			throw new Error('No se pudo obtener los reportes');
		}
        console.log(response.data.data)
		const data = response.data.data;
		return data;
	} catch (error) {
        console.error(error)
        throw new Error('Ha ocurrido un error en el servidor')
    }
};
