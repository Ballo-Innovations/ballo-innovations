"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import services from "@/constants/services";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardsWrapperRef = useRef(null);
  // const [screenLarge, setScreenLarge] = useState(window.innerWidth > 768);

  // window.addEventListener("resize", () =>
  //   setScreenLarge(window.innerWidth > 768)
  // );

  const [dispalyConent, setDispalyConent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const amountToScroll =
        cardsWrapperRef.current.offsetWidth - window.innerWidth + 25;
      scrollTween.vars.x = -amountToScroll;
      scrollTween.invalidate();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (cardsWrapperRef) {
      const cards = gsap.utils.toArray(".service-card");
      const amountToScroll =
        cardsWrapperRef.current.offsetWidth - window.innerWidth;

      let scrollTween = gsap.to("#services-cards-container", {
        x: -amountToScroll,
        ease: "power1.inOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: "#service-cards-wrapper",
          start: "top 45%",
          end: "+=" + amountToScroll,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          snap: {
            snapTo: 0.5, // Snap to the middle point
            duration: 0.5,
            ease: "power1.inOut",
          },
          onComplete: setDispalyConent(true),
        },
      });

      let desktopView = gsap.matchMedia();
      desktopView.add("(min-width: 640px)", () => {
        cards.forEach((card) => {
          const text = card.querySelectorAll(".anim");
          if (text.length) {
            gsap.from(text, {
              y: -130,
              opacity: 0,
              duration: 2,
              ease: "elastic.out(1, 0.5)",
              stagger: 0.1,
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: "left 110%",
              },
              markers: true, // Debugging
            });
          }
        });
      });
    }

    gsap.to("#what-we-are-about", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#what-we-are-about",
        start: "top 75%",
        end: "top 50%",
        scrub: true,
      },
    });
  }, [cardsWrapperRef]);

  return (
    <>
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
                className="service-card overflow-hidden flex flex-col text-white w-80 lg:w-[30vw] gap-1 py-5 rounded-[50px] shadow-2xl"
              >
                <div
                  className={`flex flex-col items-center text-center ${
                    index >= 2 && "anim"
                  }`}
                >
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

                <p
                  className={`text-sm text-center px-5 ${index >= 2 && "anim"}`}
                >
                  {service.summary}
                </p>
              </div>
            );
          })}

          <div
            id="view-portfolio"
            className="service-card overflow-hidden flex-center cursor-pointer text-white w-80 lg:w-[30vw] gap-1 p-5 rounded-[50px] shadow-2xl"
          >
            <Link href="/works" id="view-portfolio-bg" className="flex-center">
              <div className="flex-center text-center anim gap-2">
                <h2 className={`font-bold text-[1.6em] py-2 leading-7 anim`}>
                  View Our Portifolio
                </h2>
                <div className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="white"
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5 7.25a.75.75 0 0 0 0 1.5h4.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 1.06l.72.72z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
            <div className="blob" />
          </div>
        </div>
      </div>
      <div className="mt-80 px-5 md:px-32 opacity-0" id="what-we-are-about">
        <h2 className="subheading mb-5">What We’re About</h2>

        <p className="font-semibold text-base md:w-[41%]">
          Ballo is a word derived from the business streets of Lusaka that means
          &quot;a bag full of things&quot;. We are an omnichannel (digital)
          marketing company that obsesses on giving the very best to our clients
          to ensure the utmost customer satisfaction and return on investment.
        </p>
      </div>
    </>
  );
};

export default Cards;
