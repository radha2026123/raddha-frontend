/* eslint-disable @next/next/no-img-element */
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import type { TeamMember } from "./data";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function TeamMemberCard({ name, role, img }: TeamMember) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative">
        <img src={img} alt={name} className="h-56 w-full object-cover" />

        {/* Name overlay */}
        <div className="absolute bottom-3 left-1/2 w-[80%] -translate-x-1/2 rounded bg-orange-500 px-4 py-2 text-center">
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-xs text-red-100">{role}</p>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-4 py-3">
        {socialLinks.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={`${name} on ${label}`}
            className="text-gray-400 hover:text-red-500"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
