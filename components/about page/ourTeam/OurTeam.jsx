import Image from "next/image";
import TeamMember from "./teamMember/TeamMember";
import bg from "@/public/elements/Management Team_2.png";
import Lombe from "@/public/team/lombe.jpeg";
import shannon from "@/public/team/shannon.jpg";
import george from "@/public/team/george.jpg";
import jonah from "@/public/team/jonah.jpeg";
import michael from "@/public/team/michael.jpg";
import emmanuel from "@/public/team/emmanuel_phiri.jpg";
import mwali from "@/public/team/mwali.jpeg";
import lombeBG from "@/public/team/lombe-bg.jpg";
import georgeBG from "@/public/team/george-bg.png";
import michaelBG from "@/public/team/michael-bg.jpg";
import jonahBG from "@/public/team/jonah-bg.jpg";
import emmaBG from "@/public/team/emma-bg.jpg";
import mwaliBG from "@/public/team/mwali-bg.jpg";
import shannonBG from "@/public/team/shannon-bg.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Lombe Lusale-Musukuma",
      position: "Founder - Managing Director",
      photo: Lombe,
      bg: lombeBG,
      description:
        "As man who really loves numbers, Mr Lusale is an Economist by training and currently pursuing qualifications in the field of Actuary. In his other life, he loves reading, puns, cliffhangers and ….",
    },
    {
      name: "Shannon Zebron",
      position: "Co-Founder - Creative Director",
      photo: shannon,
      bg: shannonBG,
      description:
        "Ms. Zebron brings five years of experience in the creative and marketing industry as a storyteller, designer and marketing consultant. She holds a BBA in Management and is a passionate advocate for youth empowerment in the arts. She's a strong believer in the idea that collaboration is the key to any successful project, big or small. At Ballo, Shannon works with the team to make sure that its client's voices and overall vision are creatively executed and showcased for the world to see.",
    },
    {
      name: "George M'sapenda",
      position: "Technical Director",
      photo: george,
      bg: georgeBG,
      description: `George M'sapenda is a tech wizard with a knack for creating impactful technology solutions. Whether he's coding JavaScript, Ruby, Python, or SQL, George is your go-to guy for turning ideas into impactful solutions. As an innovative engineer poised to change the world, he excels in guiding technical projects.  George motto? "Innovation is about adding value, not just creating new things!"`,
    },
    {
      name: "Jonah Hachunde",
      position: "Sr Data Analyst",
      photo: jonah,
      bg: jonahBG,
      description: `A software engineer by profession, Jonah is also holds a certificate in Project Management and Cyber Security. He is focused, hard working, strong and exudes interpersonal skills. He easily adapts to new environments, is a fast learner and performs well under pressure. He has a penchant for software engineering, project management and data analysis. “I always try to make a difference in whatever small capacity I can and every opportunity I am given because I believe change starts from within ourselves.”
One thing he loves the most are number "0 & 1", "as a data analyst I've come to appreciate the term that numbers don't lie and indeed they don't lie"`,
    },
    {
      name: "Michael Chuba",
      position: "Software Engineer",
      photo: michael,
      bg: michaelBG,
      description: `Michael is the Head Software Developer at Ballo. A skilled UI/UX Designer & FullStack Developer, he proclaims “A King must know the ins and outs of his kingdom ..... The computer is my kingdom”. He is multi- talented in the digital arts and has that Midas touch; turning everything at his disposal to gold. Michael is the founder of ZedBrains and is a hand in the Ballo pantheon that makes your dreams come to life! "The cowards never start. The weak died along the way….. that leaves us.”`,
    },
    {
      name: "Emmanuel Phiri",
      position: "Creative Specialist",
      photo: emmanuel,
      bg: emmaBG,
      description:
        "Emmanuel Phiri is a seasoned creative professional with over five years of experience in the industry. With a sharp eye for creativity and aesthetics, he quickly grasps briefs and delivers results efficiently. He has helped over 100 businesses transition to the digital world through strategic concepts, compelling designs, and more.",
    },
    {
      name: "Mwali Chisanga",
      position: "Social Media and Customer Support",
      photo: mwali,
      bg: mwaliBG,
      description:
        "Mwali Chisanga is an up-and-coming social media guru who transforms mundane posts into digital gold. With a unique blend of memes and marketing, combined with a dash of strategic thinking, Mwali creates engagement magic. Known for turning content into viral sensations, Mwali is the go-to person for starting a social media presence. When not online, Mwali is busy thinking of the next big hit. Connect with Mwali to create some social media gold together!!",
    },
  ];

  return (
    <section className="relative blue-black-bg-grandient-3 pt-20 pb-14 px-5 md:px-32 overflow-x-hidden md:overflow-visible">
      <Image
        src={bg}
        alt="ballo innovations"
        quality={100}
        className="hidden md:block z-0 absolute top-[20%] -left-[10%] scale-[1.3] opacity-80"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="flex flex-col">
        <h2 className="subheading mb-10 lg:mb-0 text-white lg:text-center">
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
