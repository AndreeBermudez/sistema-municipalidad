import { axiosInstance } from "../../../core/config/api/axiosConfig"; 
import { CodigoPago } from "../models/types";

export const createCodigoPago = async (codigoPago: string, ciudadanoId : number): Promise<CodigoPago> => {
    try {
        const response = await axiosInstance.post('authentication/create/pago', {codigoPago,ciudadanoId});
        if (!response || response.status !== 201) {
            throw new Error('Error al crear el codigo de pago');
        }
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.error(error);
        throw new Error('Ha ocurrido un error, intente nuevamente');
    }
};

/**
 *  "data": {
        "pagoId": 3,
        "codigoPago": "456123",
        "fechaPago": "2025-03-12T19:32:34.4973518",
        "estado": "activo",
        "usuarioResponsable": "anonymousUser",
        "fechaCreacion": "2025-03-12T19:32:34.549699",
        "fechaModificacion": null,
        "ciudadanoId": 2
  }
 */