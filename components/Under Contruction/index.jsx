"use client";

import Image from "next/image";
import "./style.css";
import logo from "@/public/Ballo Logo New/Ballo logo new copy white.png";
import { useEffect, useState } from "react";
import ring from "@/public/elements small/15.png";

const UnderConstruction = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [animation, setAnimation] = useState(false);

  return (
    <div className="reel-wrapper-wrapper z-50">
      <div className="reel-wraper">
        <button className="button flex flex-col" data-text="Awesome">
          <Image
            src={ring}
            alt="Ballo Innovations"
            quality={100}
            className="ring absolute z-30"
            loading="eager"
          />

          <Image
            src={logo}
            alt="Ballo Innovations"
            quality={100}
            className="absolute z-20 under-contruction-logo"
            loading="eager"
          />

          <div className="relative text-center">
            <span className="actual-text">&nbsp;Coming&nbsp;</span>
            <span aria-hidden="true" className="hover-text animate-text">
              &nbsp;Coming&nbsp;
            </span>
          </div>
          <div className="relative text-center">
            <span className="actual-text">&nbsp;Soon..&nbsp;</span>
            <span aria-hidden="true" className="hover-text animate-text">
              &nbsp;Soon..&nbsp;
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
