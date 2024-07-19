"use client";

import "./style.css";
import Image from "next/image";
import arrow from "@/public/elements small/10.png";
import { useState } from "react";
import Popup from "../popup/Popup";

const TeamMember = ({ photo, name, position, bg, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [delayAnim, setDelayAnim] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    let body = document.querySelector("body");
    if (!showDetails) {
      body.classList.add("no-scroll");
      setDelayAnim(true);
    } else {
      body.classList.remove("no-scroll");
      setTimeout(() => {
        setDelayAnim(false);
      }, 1000);
    }
  };

  return (
    <div className="team-member sm:w-1/4 flex-center flex-col text-[var(--brand-color-1)] mt-10 gap-3">
      {showDetails && (
        <Popup
          toggleDetails={toggleDetails}
          photo={photo}
          name={name}
          position={position}
          bg={bg}
          description={description}
        />
      )}
      <div className="relative" onClick={toggleDetails}>
        <Image
          src={photo}
          alt={name}
          quality={100}
          className="rounded-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div
          className={`details-btn bg-white absolute w-[20%] bottom-0 right-[10%] ${
            showDetails ? "show-details" : "hidden-details"
          } ${delayAnim && "delay-anim"}`}
        >
          <Image src={arrow} alt={name} quality={100} />
        </div>
      </div>

      <div
        className="flex-center flex-col bg-clip-text"
        onClick={toggleDetails}
      >
        <h3 className="font-bold text-xl text-center">{name}</h3>
        <p className="text-black font-bold">{position}</p>
      </div>
    </div>
  );
};

export default TeamMember;
