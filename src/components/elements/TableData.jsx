const TableData = ({ children, colSpan = 0 }) => {
  return (
    <td className="border border-slate-600 p-1 md:text-base text-xs" colSpan={colSpan}>
      {children}
    </td>
  );
};

export default TableData;