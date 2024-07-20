const TableHeader = ({ children }) => {
  return (
    <th className="md:py-2 md:px-5 bg-orange-300/80 border border-slate-600 md:text-base text-xs">
      {children}
    </th>
  );
};
export default TableHeader;
