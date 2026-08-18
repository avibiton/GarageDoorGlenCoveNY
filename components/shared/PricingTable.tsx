interface PricingRow {
  service: string;
  price: string;
  note?: string;
  lead?: string;
}

interface PricingTableProps {
  rows: PricingRow[];
  showLead?: boolean;
}

export default function PricingTable({ rows, showLead = false }: PricingTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className="bg-[#171717] text-white">
            <th className="text-left px-5 py-3 font-bold">Service</th>
            <th className="text-left px-5 py-3 font-bold">Price</th>
            {showLead && (
              <th className="text-left px-5 py-3 font-bold hidden sm:table-cell">Typical Lead Time</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.service}
              className={i % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}
            >
              <td className="px-5 py-3 text-gray-700">{row.service}</td>
              <td className="px-5 py-3">
                <span className="font-bold text-[#171717]">{row.price}</span>
                {row.note && (
                  <span className="text-gray-400 text-xs ml-1">{row.note}</span>
                )}
              </td>
              {showLead && (
                <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">
                  {row.lead ?? "—"}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
