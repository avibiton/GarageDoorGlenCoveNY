import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
  href?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  href,
}: ServiceCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col h-full group"
    >
      <div className="w-12 h-12 bg-[#155b91]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#155b91] transition-colors duration-300">
        <Icon
          size={24}
          className="text-[#155b91] group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-[#171717] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      {items && items.length > 0 && (
        <ul className="mt-auto space-y-1.5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-[#155b91] text-sm font-semibold group-hover:gap-2 transition-all">
          Learn More <ArrowRight size={14} />
        </div>
      )}
    </Wrapper>
  );
}
