import { z } from 'zod';

export const formSchema = z.object({
  dni: z.string()
    .min(1, { message: 'DNI requerido' })
    .max(8, { message: 'Máximo 8 números' })
    .regex(/^\d+$/, { message: 'Solo números' }),

  nombre: z.string()
    .min(1, { message: 'Nombre requerido' })
    .regex(/^[A-Za-z\s]+$/, { message: 'Solo letras' }),

  apellido: z.string()
    .min(1, { message: 'Apellido requerido' })
    .regex(/^[A-Za-z\s]+$/, { message: 'Solo letras' }),

  correoElectronico: z.string()
    .min(1, { message: 'Correo requerido' })
    .email({ message: 'Correo inválido' }),

  telefono: z.string()
    .min(1, { message: 'Teléfono requerido' })
    .regex(/^9/, { message: 'Debe empezar con 9' })
    .regex(/^\d{9}$/, { message: '9 dígitos requeridos' }),

  codigoPago: z.string()
    .min(1, { message: 'Código requerido' })
    .regex(/^\d+$/, { message: 'Solo números' }),

  codigoZonificacion: z.string()
    .min(1, { message: 'Código requerido' })
    .regex(/^\d+$/, { message: 'Solo números' }),
});
