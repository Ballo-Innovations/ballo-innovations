"use client";

import ring from "@/public/elements small/15.png";
import bi from "@/public/elements small/16.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import "./style.css";

const HeaderImage = () => {
  useGSAP(() => {
    let mobileView = gsap.matchMedia();
    mobileView.add("(max-width: 640px)", () => {
      gsap.to("#hero-logo-img", {
        transformOrigin: "10% -50%",
        scrollTrigger: {
          trigger: "#hero-logo-img",
          start: "top 10%",
          end: "+=1000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <div
      id="hero-logo-img"
      className="max-w-[100vw] overflow-hidden h-max pl-5 -mt-5 w-[92vw] absolute "
    >
      <Image
        src={ring}
        alt="Logo"
        quality={100}
        className=" logo-ring absolute z-[3]"
      />

      <Image
        src={bi}
        alt="Logo"
        quality={100}
        className="bi-logo opacity-50 z-[2]"
      />
    </div>
  );
};

export default HeaderImage;
