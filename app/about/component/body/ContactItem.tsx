import type { ContactItemData } from "./data";

export default function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: ContactItemData) {
  return (
    <li className="flex min-w-0 flex-1 items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500">
        <Icon className="h-4 w-4 text-white" />
      </span>
      <div className="min-w-0 text-sm">
        <p className="text-xs uppercase text-gray-400">{label}</p>
        {href ? (
          <a href={href} className="break-words text-gray-800 hover:text-red-500">
            {value}
          </a>
        ) : (
          <p className="break-words text-gray-800">{value}</p>
        )}
      </div>
    </li>
  );
}
