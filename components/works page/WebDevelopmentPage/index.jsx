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
    const activeSlideImages = gsap.utils.toArray(".active-slide img");

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

          // Animate active slide's image opacity in the background
          if (currentZ < 100) {
            gsap.to(activeSlideImages[index], {
              duration: 1.5,
              opacity: 1,
              ease: "power3.out",
            });
          } else {
            gsap.to(activeSlideImages[index], {
              duration: 0,
              opacity: 0,
              ease: "power3.out",
            });
          }
        },
      });
    });
  }, []);

  return (
    <section id="work-web-dev" className="pt-[30vh] px-0">
      <div className="flex flex-col">
        <div className="slider-container">
          <div className="active-slide">
            {works.map((work, index) => (
              <Image
                key={index}
                src={work}
                alt="web development works"
                quality={100}
                className="flex-center flex-col md:w-[50%]"
              />
            ))}
          </div>

          <div className="slider">
            {works.map((work, index) => (
              <div key={index} className="slide" id={`slide-${index + 1}`}>
                <div className="slide-copy text-white">
                  <p className="font-bold text-4xl">Client Name</p>
                  <p id="index">Project Name</p>
                </div>
                <div className="slide-img overflow-visible mb-5">
                  <Image
                    key={index}
                    src={work}
                    alt="web development works"
                    quality={100}
                    className=" object-contain flex-center flex-col rounded-md"
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
