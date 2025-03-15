import { z } from 'zod';
import { formSchema } from '../validation/formSchema'; 

export const validateField = (name: string, value: string): string | null => {
	const fieldSchema = formSchema.pick({ [name]: true });
	try {
		fieldSchema.parse({ [name]: value });
		return null;
	} catch (error) {
		if (error instanceof z.ZodError) {
			return error.errors[0].message;
		}
		return 'Error de validación desconocido';
	}
};
