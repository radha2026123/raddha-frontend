import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Feature } from "./data";

type FeatureCardProps = Feature & {
  dark?: boolean;
};

export default function FeatureCard({
  icon: Icon,
  title,
  desc,
  dark = false,
}: FeatureCardProps) {
  return (
    <Card className="border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="flex items-start gap-4 p-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
            dark ? "bg-gray-900" : "bg-red-500"
          )}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-bold leading-tight text-gray-900">{title}</h3>
          <p className="mt-1 text-sm leading-snug text-gray-500">{desc}</p>
        </div>
      </CardContent>
    </Card>
  );
}
