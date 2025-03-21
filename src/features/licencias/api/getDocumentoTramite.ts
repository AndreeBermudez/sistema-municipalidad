import { axiosInstance } from '../../../core/config/api/axiosConfig';

export const getDocumentoTramite = async (codigoPago: string): Promise<string | null> => {
	if(!codigoPago) return null
	try {
		const response = await axiosInstance.get(`authentication/buscar/doc-tramite/${codigoPago}`);
		if (!response || response.status !== 200) {
			throw new Error('Error al traer el pdf');
		}
		console.log(response.data);
		return response.data.data;
	} catch (error) {
		console.error(error);
		throw new Error('Ha ocurrido un error, intente nuevamente');
	}
};
