import "./style.css";
import Image from "next/image";
import arrow from "@/public/elements small/10.png";
// import Popup from '../popup/Popup'

const TeamMember = ({ photo, name, position }) => {
  return (
    <div className="team-member sm:w-1/4 flex-center flex-col text-[var(--brand-color-1)] mt-10 gap-3">
      {/* <Popup /> */}
      <div className="relative">
        <Image
          src={photo}
          alt={name}
          quality={100}
          className="rounded-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <Image
          src={arrow}
          alt={name}
          quality={100}
          className="arrow absolute w-[20%] bottom-0 right-[10%]"
        />
      </div>

      <h3 className="font-bold">{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default TeamMember;
