import Image from "next/image";
import TeamMember from "./teamMember/TeamMember";
import bg from "@/public/elements/Management Team.png";
import Lombe from "@/public/team/team-1.jpg";
import shannon from "@/public/team/shannon.jpg";
import george from "@/public/team/george.jpg";
import jonah from "@/public/team/jonah.jpg";
import michael from "@/public/team/michael.jpg";
import emmanuel from "@/public/team/emmanuel_phiri.jpg";
import mwali from "@/public/team/mwali.jpg";
import lombeBG from "@/public/team/lombe-bg.jpg";
import georgeBG from "@/public/team/george-bg.jpg";
import jonahBG from "@/public/team/jonah-bg.jpg";
import emmaBG from "@/public/team/emma-bg.jpg";
import mwaliBG from "@/public/team/mwali-bg.jpg";
import shannonBG from "@/public/team/shannon-bg.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Lombe Lusale-Musukuma",
      position: "Executive Director",
      photo: Lombe,
      bg: lombeBG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores accusamus veritatis. Eaque cumque doloremque sunt, similique ex magni voluptates, velit dolores veniam rem recusandae accusantium rerum consequuntur molestias soluta.",
    },
    {
      name: "Shannon Zebron",
      position: "Creative Director",
      photo: shannon,
      bg: shannonBG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores accusamus veritatis. Eaque cumque doloremque sunt, similique ex magni voluptates, velit dolores veniam rem recusandae accusantium rerum consequuntur molestias soluta.",
    },
    {
      name: "George M'sapenda",
      position: "Technical Director",
      photo: george,
      bg: georgeBG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores accusamus veritatis. Eaque cumque doloremque sunt, similique ex magni voluptates, velit dolores veniam rem recusandae accusantium rerum consequuntur molestias soluta.",
    },
    {
      name: "Jonah Hachunde",
      position: "Sr Data Analyst",
      photo: jonah,
      bg: jonahBG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores accusamus veritatis. Eaque cumque doloremque sunt, similique ex magni voluptates, velit dolores veniam rem recusandae accusantium rerum consequuntur molestias soluta.",
    },
    {
      name: "Michael Chuba",
      position: "Software Engineer",
      photo: michael,
      bg: georgeBG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores accusamus veritatis. Eaque cumque doloremque sunt, similique ex magni voluptates, velit dolores veniam rem recusandae accusantium rerum consequuntur molestias soluta.",
    },
    {
      name: "Emmanuel Phiri",
      position: "Graphic Designer",
      photo: emmanuel,
      bg: emmaBG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores accusamus veritatis. Eaque cumque doloremque sunt, similique ex magni voluptates, velit dolores veniam rem recusandae accusantium rerum consequuntur molestias soluta.",
    },
    {
      name: "Mwali Chisanga",
      position: "Social Media Marketing Intern",
      photo: mwali,
      bg: mwaliBG,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolores accusamus veritatis. Eaque cumque doloremque sunt, similique ex magni voluptates, velit dolores veniam rem recusandae accusantium rerum consequuntur molestias soluta.",
    },
  ];

  return (
    <section className="relative bg-[var(--brand-color-5)] pt-20 pb-14 px-5 md:px-32 overflow-x-hidden md:overflow-visible">
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
              bg={member.bg}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
