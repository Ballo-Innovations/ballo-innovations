"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import services from "@/constants/services";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardsWrapperRef = useRef(null);
  useGSAP(() => {
    if (cardsWrapperRef) {
      const cards = gsap.utils.toArray(".service-card");
      const content = gsap.utils.toArray(".anim");
      const amountToScroll =
        cardsWrapperRef.current.offsetWidth - window.innerWidth + 25;

      let scrollTween = gsap.to("#services-cards-container", {
        x: -amountToScroll,
        ease: "power2.out",
        duration: 0.1,
        scrollTrigger: {
          trigger: "#service-cards-wrapper",
          start: "top 35%",
          end: "+=" + amountToScroll,
          pin: true,
          scrub: true,
          anticipatePin: 5,
        },
      });

      cards.forEach((card) => {
        let text = card.querySelectorAll(".anim");
        console.log("text", text);
        if (text.length) {
          gsap.from(text, {
            y: -130,
            opacity: 0,
            duration: 2,
            ease: "elastic",
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 90%",
              // markers: true,
            },
          });
        }
      });
    }
  }, [cardsWrapperRef]);

  return (
    <div id="service-cards-wrapper" className="mt-52 z-[3] overflow-hidden">
      <div
        ref={cardsWrapperRef}
        id="services-cards-container"
        className="w-max flex gap-5 lg:gap-10 px-5 lg:px-0 overflow-hidden"
      >
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="service-card overflow-hidden flex flex-col text-white w-80 lg:w-[30vw] justify-between p-5 rounded-[50px] shadow-2xl"
            >
              <div className={`fex flex-col ${index >= 2 && "anim"}`}>
                <Image
                  src={service.img}
                  alt={service.name}
                  quality={100}
                  className="w-16"
                />

                <h2
                  className={`font-bold text-[1.6em] py-2 w-8/12 leading-7 ${
                    index >= 2 && "anim"
                  }`}
                >
                  {service.name}
                </h2>
              </div>

              <p className={`text-sm text-center ${index >= 2 && "anim"}`}>
                {service.summary}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
