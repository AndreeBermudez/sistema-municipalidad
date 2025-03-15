import { axiosInstance } from "../../../core/config/api/axiosConfig"; 
import { CodigoZonificacion } from "../models/types";

export const createCodigoZonificacion = async (codigoZon:CodigoZonificacion): Promise<CodigoZonificacion> => {
    try {
        const response = await axiosInstance.post('user/save/codzonifcacion',codigoZon);
        if (!response || response.status !== 201) {
            throw new Error('Error al crear el codigo de zonificacion');
        }
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('Ha ocurrido un error, intente nuevamente');
    }
};

/**
{
  "codigo": 200,
  "message": "Código de Zonificación creado con éxito",
  "data": {
    "estado": "DISPONIBLE",
    "numeroCodigo": "COD-2025-001",
    "correo": "daniela@gmail.com",
    "fechaCreacion": "2025-03-12"
  }
}
 */