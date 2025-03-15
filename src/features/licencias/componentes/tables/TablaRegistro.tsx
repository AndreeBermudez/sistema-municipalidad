import { Download, Loader } from 'lucide-react';
import { ButtonIcon, TableCell } from '../../../../core/components/ui';
import { useActions } from '../../../../features/licencias/context';
import { TablaTramiteProps } from './TablaTramite';

export const TablaRegistro: React.FC<TablaTramiteProps> = ({ headers, data }) => {
	const { downloadRegistroLicencias } = useActions();
	return (
		<table className='min-w-full border border-none text-sm'>
			<thead className='bg-[#F9FAFB]'>
				<tr className='font-semibold'>
					{headers.map((header) => (
						<TableCell key={header.key}>{header.name}</TableCell>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row) => (
					<tr key={row.id}>
						<TableCell>{row.fecha}</TableCell>
						<TableCell>{row.codZonificacion}</TableCell>
						<TableCell>{row.codPago}</TableCell>
						<TableCell>{row.dni}</TableCell>
						<TableCell>{row.estado}</TableCell>
						<TableCell className={'flex justify-center'}>
							{row.estado === 'Disponible' ? (
								<ButtonIcon Icon={Loader} colorIcon='#1F7EBE' colorBg='#DBEAFE'>
									Pendiente
								</ButtonIcon>
							) : row.estado === 'Utilizado' ? (
								<ButtonIcon Icon={Download} colorIcon='#16A34A' colorBg='#DCFCE7' onClick={downloadRegistroLicencias}>
									Descargar
								</ButtonIcon>
							) : null}
						</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};
