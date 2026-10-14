import { teamMembers } from "./data";
import SectionBadge from "./SectionBadge";
import TeamMemberCard from "./TeamMemberCard";


export default function TeamSection() {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <SectionBadge label="Our Team" className="mb-4" />

        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
          <span className="text-red-500">Team</span> Members
        </h2>

        <p className="mx-auto mb-10 max-w-md text-sm text-gray-500">
          Sint nascetur facere, delectus conubia consequuntur.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
