export interface BaseLicense {
	numeroLicencia: string;
	numeroExpediente: string;
	numeroResolucion: string;
	nivelDeRiesgoId: number;
	trabajadorId: number;
}

export const initialBaseLicense = {
	numeroLicencia: '',
	numeroExpediente: '',
	numeroResolucion: '',
	nivelDeRiesgoId: 0,
	trabajadorId: 0,
};

export interface License extends BaseLicense {
	licenciaId: number;
	vigencia: string;
	fechaEstado: string;
	codeTramite: string;
	codeLicencia: string;
	estado: string;
	usuarioResponsable: string;
	fechaCreacion: string;
	fechaModificacion: string;
	ciudadanoId: number;
	declaracionJuradaId: number;
	codigoZonificacionId: number;
}
