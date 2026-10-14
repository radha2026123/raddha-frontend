import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  label: string;
  className?: string;
};

export default function SectionBadge({ label, className }: SectionBadgeProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <span className="h-2 w-2 rounded-full bg-red-500" />
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {label}
      </span>
      <span className="h-2 w-2 rounded-full bg-red-500" />
    </div>
  );
}
