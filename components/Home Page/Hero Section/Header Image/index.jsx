"use client";

import ring from "@/public/elements small/15.png";
import bi from "@/public/elements small/16.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import "./style.css";

const HeaderImage = () => {
  useGSAP(() => {
    gsap.to(".logo-ring", {
      scale: 8,
      transformOrigin: "25% 38%",
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#hero-scroll-trigger",
        start: "top 0%",
        end: "+=" + 50,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (self.progress >= 0.12) {
            gsap.to(".logo-ring", { opacity: 0 });
          } else {
            gsap.to(".logo-ring", { opacity: 1 });
          }
        },
      },
    });

    let mobileView = gsap.matchMedia();
    mobileView.add("(max-width: 640px)", () => {
      gsap.to(".logo-ring", {
        scale: 8,
        transformOrigin: "25% 38%",
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#hero-scroll-trigger",
          start: "top 0%",
          end: "+=",
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress >= 0.12) {
              gsap.to(".logo-ring", { opacity: 0 });
            } else {
              gsap.to(".logo-ring", { opacity: 1 });
            }
          },
        },
      });

      gsap.to("#hero-logo-img", {
        transformOrigin: "10% -50%",
        scrollTrigger: {
          trigger: "#hero-logo-img",
          start: "top 10%",
          end: "+=1000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          markers: true,
        },
      });
    });
  }, []);

  return (
    <div
      id="hero-logo-img"
      className="max-w-[100vw] overflow-hidden h-max pl-5 -mt-5 w-[92vw] absolute top-[25vh] md:top-40"
    >
      <Image
        src={ring}
        alt="Logo"
        quality={100}
        className=" logo-ring absolute -left-[5%] lg:left-[4%] z-[3] w-[calc(52.5%-0.3em)] md:w-[calc(29%-0.3em)]"
      />

      <Image
        src={bi}
        alt="Logo"
        quality={100}
        className="bi-logo w-auto min-w-[142vw] md:min-w-0 md:w-[calc(89%-1em)] -ml-[20%] md:-ml-6 opacity-50 z-[2]"
      />
    </div>
  );
};

export default HeaderImage;
