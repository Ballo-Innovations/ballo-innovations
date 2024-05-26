"use client";

import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const HeaderText = () => {
  const fullText = "REBRANDING THE FUTURE";
  const [text, setText] = useState("");
  const [typeSpeed, setTypeSpeed] = useState(200 - Math.random() * 100);
  const interval = 2000;
  const [startTicker, setStartTicker] = useState(false);

  const tick = () => {
    const updatedText = fullText.substring(0, text.length + 1);
    console.log("tick", text, updatedText);
    setText(updatedText);

    if (updatedText === fullText) {
      setTypeSpeed(interval);
      return;
    }
  };

  useEffect(() => {
    let tickerDelay = setTimeout(() => {
      setStartTicker(true);
    }, 5000);

    return () => {
      clearTimeout(tickerDelay);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let ticker = setInterval(() => {
      if (startTicker) {
        tick();
      }
    }, typeSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [startTicker, text]);

  useGSAP(() => {
    gsap.to("#header-text", {
      ease: "power3.out",
      webkitTextStroke: "1px var(--brand-color)",
      TextStroke: "1px var(--brand-color)",
      filter: "drop-shadow(0 0 20px #23f9f7)",
      scrollTrigger: {
        trigger: "#hero-scroll-trigger",
        start: "top 10%",
        scrub: 1,
        // markers: true,
      },
    });

    if (text === fullText) {
      gsap.to(".blinker", {
        animation: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: "#navbar",
          start: "+=50",
          end: "top",
          scrub: 1,
          // markers: true,
        },
      });
    }
  }, [text]);

  return (
    <h1
      id="header-text"
      className="mt-[5vh] md:top-0 relative z-[4] text-center text-[3rem] lg:text-[6vw] font-bold uppercase max-sm:text-5xl overflow-visible"
    >
      {text}
      <span className="blinker" />
    </h1>
  );
};

export default HeaderText;
