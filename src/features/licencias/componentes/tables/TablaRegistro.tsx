import { useEffect, useState } from 'react';
import { Column, Pagination, Row, Table, TableBody, TableError } from '../../../../core/components/common/table';
import { usePagination } from '../../../../core/components/common/table/usePagination';
import { ReportePago } from '../../../pago/models/ReportePago';
import { useDocumentoTramite } from '../../hooks/useDocumentoTramite';
import { LicenciaActions } from '../actions/LicenciaActions';
import { TramiteState } from '../actions/TramiteState';
import { RowLoader } from '../../../../core/components/common/table/RowLoader';
import { NoRecordsFound } from '../../../../core/components/common/table/NoRecordsFound';

interface TablaRegistroProps {
	headers: string[];
	data: ReportePago[];
	isLoading: boolean;
	error?: Error | null;
}

const ITEMS_PAGE = 6;

export const TablaRegistro = ({ headers, data, isLoading, error }: TablaRegistroProps) => {
	const [codigoPago, setCodigoPago] = useState<string | null>(null);
	const { currentPage, currentItems, totalPages, handleChangePage } = usePagination<ReportePago>({
		data,
		itemsPerPage: ITEMS_PAGE,
	});
	const { data: documentData } = useDocumentoTramite(codigoPago || '');

	useEffect(() => {
		if (documentData && codigoPago) {
			console.log('Abriendo documento');
			window.open(`https://drive.google.com/file/d/${documentData}/view`, '_blank');
			setCodigoPago(null);
		}
	}, [documentData, codigoPago]);

	const viewDocumentoTramite = (codigo: string) => {
		setCodigoPago(codigo);
	};
	const showPagination = !isLoading && !error && data.length > 0;
	return (
		<>
			<Table headers={headers}>
				<TableBody>
					{isLoading && <RowLoader />}
					{!isLoading && error && <TableError message={error.message || 'Ha ocurrido un error inesperado'} />}
					{!isLoading && !error && data.length === 0 && <NoRecordsFound />}
					{currentItems.map((row) => (
						<Row key={row.idPago}>
							<Column>{row.fecha}</Column>
							<Column>{row.solicitante}</Column>
							<Column>{row.dni}</Column>
							<Column>{row.codigoPago}</Column>
							<TramiteState estado={row.estado} />
							<LicenciaActions estado={row.estado} onDownload={() => viewDocumentoTramite(row.codigoPago)} />
						</Row>
					))}
				</TableBody>
			</Table>

			{showPagination && (
				<Pagination
					currentPage={currentPage}
					itemsPerPage={ITEMS_PAGE}
					totalPages={totalPages}
					onPageChange={handleChangePage}
					totalItems={data.length}
				/>
			)}
		</>
	);
};
