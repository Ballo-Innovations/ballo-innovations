"use client";

import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeaderText = () => {
  useGSAP(() => {
    gsap.to("#header-text", {
      // To object
      opacity: 1,
      duration: 1,
      ease: "circ.inOut",
    });

    gsap.to("#header-text", {
      ease: "power3.out",
      webkitTextStroke: "1px var(--brand-color)",
      TextStroke: "1px var(--brand-color)",
      filter: "drop-shadow(0 0 20px #23f9f7)",
      scrollTrigger: {
        trigger: "#hero-scroll-trigger",
        start: "top 10%",
        toggleClass: "glowing-text",
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <h1
      id="header-text"
      className="relative z-[4] opacity-0 text-center text-[3rem] lg:text-[6vw] font-bold uppercase max-sm:text-5xl overflow-visible"
    >
      Rebranding the Future
    </h1>
  );
};

export default HeaderText;
