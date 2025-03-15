export interface Ciudadano {
	ciudadanoId?: number;
	dni: string;
	nombre: string;
	apellido: string;
	correoElectronico: string;
	telefono: string;
}

export interface DniResponse {
	nombres: string;
	apellidoPaterno: string;
	apellidoMaterno: string;
	tipoDocumento: string;
	numeroDocumento: string;
	digitoVerificador: string;
}
