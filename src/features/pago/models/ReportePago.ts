export interface ReportePago {
	idPago: number;
	fecha: string;
	solicitante: string;
	dni: string;
	codigoPago: string;
	estado: 'ACTIVO' | 'REGISTRADO';
}
