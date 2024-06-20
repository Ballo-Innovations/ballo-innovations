import MissionValues from "./missionValues/MissionValues";
import OurTeam from "./ourTeam/OurTeam";
import Stats from "./stats/Stats";

const About = () => {
  return (
    <main
      className="min-h-[105vh] -mt-[5vh] min-w[100vw] max-w-[w-100vw] overflow-visible text-white flex flex-col relative z-[5]"
      style={{ padding: 0 }}
    >
      <MissionValues />
      <Stats />
      <OurTeam />
    </main>
  );
};

export default About;
