"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

import Image from "next/image";
import background from "@/public/Ballo Logo New/svg/Ballo logo new-01.svg";
import background2 from "@/public/Backgrounds/About.png";
import test1 from "@/public/projects/web-development/2.png";
import test2 from "@/public/projects/web-development/4.png";
import test3 from "@/public/projects/web-development/1.png";
import test4 from "@/public/projects/web-development/10.png";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const WebDevelopmentPage = () => {
  const works = [test4, test3, test2, test1];
  const [freezeSlide, setFreezeSlide] = useState(true);

  // Tutorial link: https://www.youtube.com/watch?v=aAGypqJd818

  useGSAP(() => {
    // Wrap elements of interest in arrays
    const slides = gsap.utils.toArray(".slide");
    // const activeSlideImages = gsap.utils.toArray(".active-slide img");

    // Get starting Z axis value
    const getInitialTranslateZ = (slideItem) => {
      const style = window.getComputedStyle(slideItem);
      const matrix = style.transform.match(/matrix3d\((.+)\)/);

      if (matrix) {
        const values = matrix[1].split(", ");
        return parseFloat(values[14] || 0);
      }

      return 0;
    };

    // Calculates each slides opacity based on it's current possition
    const mapRange = (value, inMin, inMax, outMin, outMax) => {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider-container",
        start: "top 10%",
        onUpdate: (self) => {
          if (self.progress > 0) {
            setFreezeSlide(false);
          }
        },
      },
    });

    // Fetch starting position for each slide
    slides.forEach((slide, index) => {
      const initialZ = getInitialTranslateZ(slide);
      ScrollTrigger.create({
        trigger: ".slider-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          // Update slide either closer or further based on scroll progress
          const progress = self.progress;
          const zIncrement = progress * 6000; // Value should depend on distance of last slide
          const currentZ = initialZ + zIncrement;

          let opacity;

          if (currentZ > -1500) {
            opacity = mapRange(currentZ, -1500, 0, 0.5, 1); // Make slide fully visible when it's between -2500 and 0
          } else {
            opacity = mapRange(currentZ, -3000, -1500, 0, 0.5); // Make slide less visible as it moves furter back
          }

          slide.style.opacity = opacity;

          slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`; // Transform based on calculated current Z value
        },
      });
    });
  }, []);

  return (
    <section id="work-web-dev" className="pt-[30vh] px-0">
      <div className="flex flex-col">
        <div className="slider-container">
          <div className="slider">
            {works.map((work, index) => (
              <div
                key={index}
                className="slide overflow-visible"
                id={`slide-${index + 1}`}
              >
                <div className="slide-img relative overflow-hidden cursor-pointer hover:scale-110">
                  <div className="follow-link-bubble absolute rounded-bl-full w-0 h-0 -top-10 -right-10 bg-white" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 12 12"
                    className="absolute top-5 right-5 rotate-45"
                  >
                    <path
                      fill="#020055"
                      d="M6 10.5a.75.75 0 0 0 .75-.75V3.81l1.97 1.97a.75.75 0 0 0 1.06-1.06L6.53 1.47a.75.75 0 0 0-1.06 0L2.22 4.72a.75.75 0 1 0 1.06 1.06l1.97-1.97v5.94c0 .414.336.75.75.75"
                    ></path>
                  </svg>
                  <Image
                    key={index}
                    src={work}
                    alt="web development works"
                    quality={100}
                    className="object-contain flex-center flex-col rounded-md"
                  />
                </div>
              </div>
            ))}

            <div
              id="slide-5" // Should be value greater than 1 of last slide
              className={`slide text-white text-center lg:text-start title-slide ${
                freezeSlide && "freezeTitleSlide"
              }`}
            >
              <div className="slide-img flex-center flex-col">
                <h1 className="font-bold text-8xl">Our Works</h1>
                <h2 className="text-3xl font-bold my-6">Web Development</h2>
              </div>
              <div className="title-bg flex-center">
                <Image
                  src={background2}
                  alt="web development works"
                  quality={100}
                  className=" absolute z-[1]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentPage;
