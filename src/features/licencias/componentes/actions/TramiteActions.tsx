import { ColumnActions } from '../../../../core/components/common/table';
import { Button } from '../../../../core/components/ui';

interface TramiteActionsProps {
	estado: 'PENDIENTE' | 'VIGENTE';
	idLicencia: number;
	openModal?: (id: number) => void
	download?: () => void;
}

const estadoConfig = {
	PENDIENTE: {
		label: 'Completar',
		classname: 'bg-[#DBEAFE] text-[#1E3A8A] shadow-md px-[10px] py-[5px]',
		onClick: 'openModal',
	},
	VIGENTE: {
		label: 'Descargar',
		classname: 'bg-[#DCFCE7] text-[#16A34A] shadow-md px-[10px] py-[5px]',
		onClick: 'download',
	},
} as const;

export const TramiteActions = ({ estado,idLicencia, openModal, download }: TramiteActionsProps) => {
	const config = estadoConfig[estado];
	const handleClick = () => {
		if (config.onClick === 'download' && download) {
		  download();
		} else if (openModal) {
		  openModal(idLicencia); // Pasa el idLicencia
		}
	  };
	return (
		<ColumnActions>
			<Button
				className={config.classname}
				onClick={handleClick}>
				{config.label}
			</Button>
		</ColumnActions>
	);
};
