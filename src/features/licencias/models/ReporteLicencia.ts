export interface ReporteLicencia {
	idLicencia: number;
	fecha: string;
	negocio: string;
	ruc: string;
	estado: 'PENDIENTE' | 'VIGENTE';
	codeDocLicencia: string;
}
