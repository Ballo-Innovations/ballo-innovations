import Image from "next/image";
import TeamMember from "./teamMember/TeamMember";
import bg from "@/public/elements/Management Team.png";
import Lombe from "@/public/team/team-1.jpg";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Lombe Lusale-Musukuma",
      position: "Executive Director",
      photo: Lombe,
    },

    {
      name: "Lombe Lusale-Musukuma",
      position: "Executive Director",
      photo: Lombe,
    },
    {
      name: "Lombe Lusale-Musukuma",
      position: "Executive Director",
      photo: Lombe,
    },
    {
      name: "Lombe Lusale-Musukuma",
      position: "Executive Director",
      photo: Lombe,
    },
    {
      name: "Lombe Lusale-Musukuma",
      position: "Executive Director",
      photo: Lombe,
    },
  ];

  return (
    <section className="relative bg-[var(--brand-color-5)] pt-20 pb-14 px-5 md:px-32 overflow-visible">
      <Image
        src={bg}
        alt="ballo innovations"
        quality={100}
        className="z-0 absolute bottom-[7%] -left-[10%] scale-[1.3] opacity-80"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="flex flex-col">
        <h2 className="subheading mb-10 lg:mb-0 text-[var(--brand-color-1)] lg:text-center">
          Our Team
        </h2>

        <div className="flex flex-wrap gap-[10%] z-[1]">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              photo={member.photo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
