import { Card, CardContent } from "@/components/ui/card";
import ContactItem from "./ContactItem";
import SectionBadge from "./SectionBadge";
import { contactItems, owner } from "./data";


export default function ContactSection() {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-4xl px-6">
        <SectionBadge label="Contact Owner" className="mb-4" />

        <h2 className="mb-10 text-center text-3xl font-extrabold">
          Get In <span className="text-red-500">Touch</span>
        </h2>

        <Card className="border border-gray-100 shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900">{owner.name}</h3>
            <p className="mb-6 text-sm font-medium text-red-500">{owner.role}</p>

            <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              {contactItems.map((item) => (
                <ContactItem key={item.label} {...item} />
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
