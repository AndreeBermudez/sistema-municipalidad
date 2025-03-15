interface TableCellProps {
	children: React.ReactNode;
	className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ children, className = '' }) => {
	return (
    <td className={`border-b border-gray-300 p-2 whitespace-nowrap text-center ${className}`}>
      {children}
      </td>
    );
};
