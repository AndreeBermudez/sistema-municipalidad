import { Column, Pagination, Row, Table, TableBody } from '../../../../core/components/common/table';
import { usePagination } from '../../../../core/components/common/table/usePagination';
import { useActions } from '../../../../features/licencias/context';
import { LicenciaActions } from '../actions/LicenciaActions';

export type DataRegistro = {
	id: number;
	fecha: string;
	solicitante: string;
	codigoPago: string;
	estado: 'Activo' | 'Vencido';
};

interface TablaRegistroProps {
	headers: string[];
	data: DataRegistro[];
}

const ITEMS_PAGE = 6

export const TablaRegistro = ({ headers, data } : TablaRegistroProps) => {
	const { downloadRegistroLicencias } = useActions();
	const { currentPage, currentItems, totalPages, handleChangePage } = usePagination<DataRegistro>({
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
							<Column>{row.solicitante}</Column>
							<Column>{row.codigoPago}</Column>
							<Column>{row.estado}</Column>
							<LicenciaActions estado={row.estado} onDownload={() => downloadRegistroLicencias()} />
						</Row>
					))}
				</TableBody>
			</Table>
			<Pagination currentPage={currentPage} itemsPerPage={ITEMS_PAGE} totalPages={totalPages} onPageChange={handleChangePage} totalItems={data.length} />
		</>
	);
};