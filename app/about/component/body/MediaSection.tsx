import { Play } from "lucide-react";
import { aboutImages } from "./data";

export default function MediaSection() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 lg:flex-row">
        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg lg:w-1/2">
          <img
            src={aboutImages.office}
            alt="Our office"
            className="h-64 w-full object-cover sm:h-72"
          />
        </div>

        {/* Video */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl lg:w-1/2">
          <img
            src={aboutImages.video}
            alt="Company video preview"
            className="h-64 w-full object-cover brightness-75"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white">
              <Play className="h-6 w-6 fill-white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
