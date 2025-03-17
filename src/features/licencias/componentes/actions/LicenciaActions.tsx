import { Download, Loader } from "lucide-react";
import { ColumnActions } from "../../../../core/components/common/table"; 
import { ButtonIcon } from "../../../../core/components/ui";

interface LicenciaActionsProps {
  estado: 'Activo' | 'Vencido';
  onDownload: () => void;
}

const estadoConfig = {
  Activo: {
    Icon: Loader,
    label: 'Pendiente',
    colorIcon: '#1F7EBE',
    colorBg: '#DBEAFE',
    onClick: undefined
  },
  Vencido: {
    Icon: Download,
    label: 'Descargar',
    colorIcon: '#16A34A',
    colorBg: '#DCFCE7',
    onClick: 'download' as const
  }
} as const;

export const LicenciaActions = ({ estado, onDownload }: LicenciaActionsProps) => {
  const config = estadoConfig[estado];

  return (
    <ColumnActions>
      <ButtonIcon Icon={config.Icon} colorIcon={config.colorIcon} colorBg={config.colorBg} onClick={config.onClick === 'download' ? onDownload : undefined}>
        {config.label}
      </ButtonIcon>
    </ColumnActions>
  );
};