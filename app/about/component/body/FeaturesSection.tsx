import { features } from "./data";
import FeatureCard from "./FeatureCard";


export default function FeaturesSection() {
  return (
    <div className="mb-12 grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
      {features.map((feature, i) => (
        <FeatureCard key={feature.title} {...feature} dark={i === 1} />
      ))}
    </div>
  );
}
