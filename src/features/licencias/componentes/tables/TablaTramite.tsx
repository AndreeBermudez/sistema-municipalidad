import {
	Column,
	NoRecordsFound,
	Pagination,
	Row,
	RowLoader,
	Table,
	TableBody,
	TableError,
} from '../../../../core/components/common/table';
import { usePagination } from '../../../../core/components/common/table/usePagination';
import { useActions } from '../../../../features/licencias/context';
import { ReporteLicencia } from '../../models/ReporteLicencia';
import { TramiteActions } from '../actions/TramiteActions';
import { TramiteState } from '../actions/TramiteState';

export interface TablaTramiteProps {
	headers: string[];
	data: ReporteLicencia[];
	isLoading: boolean;
	error?: Error | null;
}

const ITEMS_PAGE = 6;

export const TablaTramite = ({ headers, data, isLoading, error } : TablaTramiteProps) => {
	const { openModalLicense, downloadTramitarLicencias } = useActions();
	const { currentPage, currentItems, totalPages, handleChangePage } = usePagination<ReporteLicencia>({
		data,
		itemsPerPage: ITEMS_PAGE,
	});

	const handleDownloadLicense = (code: string) => {
		window.open(`https://drive.google.com/file/d/${code}/view`, '_blank');
		downloadTramitarLicencias();
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
						<Row key={row.idLicencia}>
							<Column>{row.fecha}</Column>
							<Column>{row.negocio}</Column>
							<Column>{row.ruc}</Column>
							<TramiteState estado={row.estado} />
							<TramiteActions
								estado={row.estado}
								idLicencia={row.idLicencia}
								openModal={openModalLicense}
								download={() => handleDownloadLicense(row.codeDocLicencia)}
							/>
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
