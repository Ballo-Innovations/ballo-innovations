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
        transformOrigin: "80% 10%",
        scrollTrigger: {
          trigger: "#hero-logo-img",
          start: "top 10%",
          end: "+=3500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // markers: true,
          onUpdate: (self) => {
            if (self.progress <= 0.08) {
              console.log(self.progress);
              const scale = 1 - self.progress;
              gsap.to("#hero-logo-img", { scale: scale, overwrite: "auto" });
            } else {
              gsap.to("#hero-logo-img", { scale: 0.93, overwrite: "auto" });
            }
          },
        },
      });
    });

    let desktopView = gsap.matchMedia();
    desktopView.add("(min-width: 641px)", () => {
      gsap.to("#hero-logo-img", {
        transformOrigin: "10% 0%",
        scrollTrigger: {
          trigger: "#hero-logo-img",
          start: "top 10%",
          end: "bottom",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          // markers: true,
          onUpdate: (self) => {
            if (self.progress <= 0.08) {
              const scale = 1 - (self.progress * 0.5) / 0.08;
              gsap.to("#hero-logo-img", { scale: scale, overwrite: "auto" });
            } else {
              gsap.to("#hero-logo-img", { scale: 0.5, overwrite: "auto" });
            }
          },
        },
      });
    });
  }, []);

  return (
    <div
      id="hero-logo-img"
      className="max-w-[100vw] overflow-hidden h-[200vh] md:h-[450vh] pl-5 -mt-5 w-[94vw] absolute"
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
