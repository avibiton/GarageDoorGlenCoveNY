interface PartTagCloudProps {
  tags: string[];
  label?: string;
}

export default function PartTagCloud({ tags, label = "Parts & Services We Stock" }: PartTagCloudProps) {
  return (
    <div className="bg-[#f5f5f5] rounded-xl p-5 border border-gray-200">
      {label && (
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
