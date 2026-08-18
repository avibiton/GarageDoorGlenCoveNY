interface TrustItem {
  label: string;
}

const DEFAULT_ITEMS: TrustItem[] = [
  { label: "✅ Same-Day Service" },
  { label: "📋 Free Written Estimate" },
  { label: "🛡️ Written Warranty" },
  { label: "📞 Real Technician Answers" },
];

interface TrustBarProps {
  items?: TrustItem[];
}

export default function TrustBar({ items = DEFAULT_ITEMS }: TrustBarProps) {
  return (
    <div className="bg-[#f5f5f5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap justify-center gap-x-8 gap-y-2">
        {items.map((item) => (
          <span key={item.label} className="text-sm font-medium text-gray-700">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
