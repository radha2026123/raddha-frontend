import {
  DollarSign,
  Wrench,
  Users,
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type TeamMember = {
  name: string;
  role: string;
  img: string;
};

export type ContactItemData = {
  icon: LucideIcon;
  label: string;
  value?: string;
  href?: string;
  values?: { text: string; href?: string }[];
};
export const features: Feature[] = [
  {
    icon: DollarSign,
    title: "Best Price Guaranteed",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Wrench,
    title: "Finance Analysis",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Ratan Kumar Ghalley",
    role: "CEO, Director",
    img: "/ceo.jpeg",
  },
  {
    name: "Hary Warth",
    role: "Director Of Finance",
    img: "/binodghalley.jpeg",
  },
];

// Replace the placeholder details with the real ones
export const owner = {
  ...teamMembers[0],
  email: "nailmanufacturing55@gmail.com",
  phones: ["+975 17449338", "+975 77 51 55 55"],
  address: "Damdum industrial park,Samtse, Bhutan",
};

export const contactItems: ContactItemData[] = [
  {
    icon: Mail,
    label: "Email",
    value: owner.email,
    href: `mailto:${owner.email}`,
  },
{
  icon: Phone,
  label: "Phone",
  values: owner.phones.map((p) => ({
    text: p,
    href: `tel:${p.replace(/\s/g, "")}`,
  })),
},
  { icon: MapPin, label: "Address", value: owner.address },
];

export const aboutImages = {
  office: "/fence5.jpeg",
  video: "/fence2.jpeg",
};
