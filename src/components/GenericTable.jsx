export default function GenericTable({ columns = [], data = [], renderRow }) {
  return (
    <table className="min-w-full table-fixed border-separate border-spacing-0">
      <thead>
        <tr className="bg-emerald-600 text-white">
          {columns.map((col, i) => (
            <th
              key={i}
              className="text-left font-semibold px-6 py-3 border-b"
              style={{
                width:
                  i === 0
                    ? "5%"
                    : i === columns.length - 1
                    ? "10%"
                    : `${85 / (columns.length - 2)}%`, // distribute remaining evenly
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-gray-800">{data.map(renderRow)}</tbody>
    </table>
  );
}