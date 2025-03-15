import { axiosInstance } from "../../../core/config/api/axiosConfig";
import { DniResponse } from "../models/types";

export const getCiudadanoByDni = async (dni: string): Promise<DniResponse> => {
	try {
		const response = await axiosInstance.post(`authentication/ciudadano/${dni}`);
        if(!response || response.status !== 200){
            throw new Error ('Error al obtener datos del DNI')
        }
		console.log(response.data.data)
        return response.data.data
	} catch (error) {
        console.error(error)
        throw new Error('Error en el servidor')
    }
};