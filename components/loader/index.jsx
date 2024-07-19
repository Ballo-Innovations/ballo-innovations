"use client";

import Image from "next/image";
import "./style.css";
import logo from "@/public/Ballo Logo New/svg/Ballo logo new-03.svg";
import logoSm from "@/public/Ballo Logo New/svg/Ballo logo new-02.svg";
import FollowMouse from "./mouseTracker";
import RippleEffect from "./rippleEffect";
import { useEffect, useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Set timeouts and store the IDs
    const fadeOutTimeout = setTimeout(() => {
      document.querySelector("body")?.classList.remove("no-scroll");
      setFadeOut(true);
    }, 500);

    const hideLoaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(hideLoaderTimeout);
    };
  }, []);

  return (
    showLoader && (
      <div id="loader" className={fadeOut && "opacity-0"}>
        {/* <FollowMouse unmount={fadeOut} /> */}
        <RippleEffect
          top={"10%"}
          left={"-20%"}
          width={"20vw"}
          rippleClass="ripple-1"
        />

        <RippleEffect
          top={"70%"}
          left={"50%"}
          width={"8vw"}
          rippleClass="ripple-2"
        />

        <RippleEffect
          top={"-15%"}
          left={"40%"}
          width={"11vw"}
          rippleClass="ripple-3"
        />

        <RippleEffect
          top={"20%"}
          left={"70%"}
          width={"13vw"}
          rippleClass="ripple-4"
        />

        <div className="loader-container relative w-full h-full flex-center overflow-visible">
          <Image
            src={logo}
            alt="Ballo Innovations"
            quality={100}
            className="w-[80vw] hidden md:block"
            loading="eager"
            blurDataURL={logo.blurhashDataUrl}
          />

          <Image
            src={logoSm}
            alt="Ballo Innovations"
            quality={100}
            className="w-[80vw] block md:hidden"
            loading="eager"
            blurDataURL={logo.blurhashDataUrl}
          />
        </div>
      </div>
    )
  );
};

export default Loader;
