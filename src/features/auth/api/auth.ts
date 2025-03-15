import { axiosInstance } from '../../../core/config/api/axiosConfig'; 
import { AuthResponse, AuthUserSignIn } from '../models/types';

export const login = async (credenciales: AuthUserSignIn): Promise<AuthResponse> => {
	try {
		const response = await axiosInstance.post('authentication/singin', credenciales);
    if(!response || response.status !== 200){
      throw new Error('Error al autenticar sus credenciales, intente de nuevo')
    }
		return response.data;
	} catch (error) {
    console.error(error)
    throw new Error('Ha ocurrido un error, intente nuevamente');
  }
};
