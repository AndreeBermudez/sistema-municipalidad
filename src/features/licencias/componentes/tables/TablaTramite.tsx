import { Column, Pagination, Row, Table, TableBody } from '../../../../core/components/common/table';
import { usePagination } from '../../../../core/components/common/table/usePagination';
import { useActions } from '../../../../features/licencias/context';
import { TramiteActions } from '../actions/TramiteActions';

export type LicenciaData = {
	id: number;
	fecha: string;
	nombreNegocio: string
	ruc: string;
	estado: 'Pendiente' | 'Vigente';
};

export interface TablaTramiteProps {
	headers: string[];
	data: LicenciaData[];
}

const ITEMS_PAGE = 6

export const TablaTramite: React.FC<TablaTramiteProps> = ({ headers, data }) => {
	const { openModal, downloadTramitarLicencias } = useActions();
	const { currentPage, currentItems, totalPages, handleChangePage } = usePagination<LicenciaData>({
		data,
		itemsPerPage: ITEMS_PAGE,
	});
	return (
		<>
			<Table headers={headers}>
				<TableBody>
					{currentItems.map((row) => (
						<Row key={row.id}>
							<Column>{row.fecha}</Column>
							<Column>{row.nombreNegocio}</Column>
							<Column>{row.ruc}</Column>
							<Column>{row.estado}</Column>
							<TramiteActions estado={row.estado} openModal={openModal} download={downloadTramitarLicencias} />
						</Row>
					))}
				</TableBody>
			</Table>
			<Pagination currentPage={currentPage} itemsPerPage={ITEMS_PAGE} totalPages={totalPages} onPageChange={handleChangePage} totalItems={data.length} />
		</>
	);
};