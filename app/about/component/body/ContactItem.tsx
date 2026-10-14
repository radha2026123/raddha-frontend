import type { ContactItemData } from "./data";

export default function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  values,
}: ContactItemData) {
  // Support both shapes: a single value/href, or a list of values
  const lines = values ?? (value ? [{ text: value, href }] : []);

  return (
    <li className="group flex min-w-0 flex-1 items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-100 hover:bg-white hover:shadow-md">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors duration-200 group-hover:bg-red-500 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </p>

        <div className="space-y-0.5">
          {lines.map(({ text, href }) =>
            href ? (
              <a
                key={text}
                href={href}
                className="block break-words text-sm font-medium text-gray-800 transition-colors hover:text-red-500"
              >
                {text}
              </a>
            ) : (
              <p
                key={text}
                className="break-words text-sm font-medium text-gray-800"
              >
                {text}
              </p>
            )
          )}
        </div>
      </div>
    </li>
  );
}