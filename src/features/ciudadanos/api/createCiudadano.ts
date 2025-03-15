import { axiosInstance } from '../../../core/config/api/axiosConfig';
import { Ciudadano } from '../models/types';

export const createCiudadano = async (ciudadano: Ciudadano): Promise<Ciudadano> => {
	try {
		const response = await axiosInstance.post('user/create/ciudadano', ciudadano);
		if (!response || response.status !== 201) {
			throw new Error('Error al crear el ciudadano');
		}
		console.log(response.data)
		return response.data.data;
	} catch (error) {
		console.error(error);
		throw new Error('Ha ocurrido un error, intente nuevamente');
	}
};

/* 
{
  "codigo": 200,
  "message": "Elemento creado con éxito.",
  "data": {
    "ciudadanoId": 3,
    "dni": "78451236",
    "nombre": "Daniel",
    "apellido": "Carrasco",
    "correoElectronico": "daniela@gmail.com",
    "telefono": "987654321",
    "usuarioResponsable": "user@user.com",
    "fechaCreacion": "2025-03-12T19:23:20.4682196",
    "fechaModificacion": null,
    "direccionDto": null
  }
}
*/
