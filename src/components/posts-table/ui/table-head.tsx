export const TableHead = ({ headers }: { headers: string[] }) => (
  <thead className="text-xs">
    <tr className="sticky top-0">
      {headers.map((header) => (
        <th
          key={header}
          scope="col"
          className="px-6 py-3 align-middle text-start text-gray-500
            font-bold whitespace-nowrap uppercase"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);
