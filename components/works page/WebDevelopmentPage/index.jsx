"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

import Image from "next/image";
import background from "@/public/Ballo Logo New/svg/Ballo logo new-06.svg";
import background2 from "@/public/Backgrounds/About.png";
import maluba from "@/public/projects/web-development/maluba-tv.jpg";
import swr from "@/public/projects/web-development/swr.png";
import insizwe from "@/public/projects/web-development/insizwe.png";
import mudenda from "@/public/projects/web-development/mudenda-capital.png";
import seneca from "@/public/projects/web-development/seneca-dsc.png";
import { useEffect, useState } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const WebDevelopmentPage = () => {
  const works = [
    { cover: swr, link: "https://style-with-roses.vercel.app/" },
    { cover: maluba, link: "https://maluba-media.vercel.app/" },
    { cover: insizwe, link: "https://insizwebrokers.com/" },
    { cover: mudenda, link: "https://insizwebrokers.com" },
    { cover: seneca, link: "https://senecazambia.com/" },
  ];
  const [freezeSlide, setFreezeSlide] = useState(true);

  // Tutorial link: https://www.youtube.com/watch?v=aAGypqJd818

  useEffect(() => {
    let mobileView = gsap.matchMedia();
    mobileView.add("(max-width: 768px)", () => {
      gsap.to("#webdev-mobile-title", {
        top: "20%",
        opacity: 0,
        scale: 0.7,
        scrollTrigger: {
          trigger: "#work-web-dev",
          start: "top 10%",
          end: "+=1000",
          scrub: 1,
          // markers: true,
        },
      });

      gsap.to(".slider", {
        opacity: 1,
        scrollTrigger: {
          trigger: "#webdev-mobile-title",
          start: "top 0%",
          // end: "+=1000",
          scrub: 1,
          // markers: true,
        },
      });
    });

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

    let DesktopView = gsap.matchMedia();
    DesktopView.add("(min-width: 768px)", () => {
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
          const zIncrement = progress * 7500; // Value should depend on distance of last slide
          const currentZ = initialZ + zIncrement;

          slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`; // Transform based on calculated current Z value
        },
      });
    });
  }, []);

  return (
    <section id="work-web-dev" className="pt-[30vh] px-0">
      <div
        id="webdev-mobile-title"
        className="fixed top-[37%] md:hidden text-white text-center w-full"
      >
        <h1 className="font-bold text-7xl px-10">Our Works</h1>
        <h2 className="text-3xl font-bold mt-3">Web Development</h2>
      </div>

      <div className="flex flex-col">
        <div className="slider-container">
          <div className="slider opacity-0 md:opacity-100">
            {works.map((work, index) => (
              <div
                key={index}
                className={`slide overflow-visible ${
                  freezeSlide ? "md:opacity-0" : "opacity-100"
                }`}
                id={`slide-${index + 1}`}
              >
                <div className="slide-img relative overflow-hidden cursor-pointer">
                  <div className="follow-link-bubble absolute w-full h-full flex-center opacity-0">
                    <Link
                      href={work.link}
                      target="_blank"
                      className="border-4 border-white rounded-full text-white py-5 px-10 font-semibold text-4xl"
                    >
                      View Project
                    </Link>
                  </div>
                  <Image
                    key={index}
                    src={work.cover}
                    alt="web development works"
                    quality={100}
                    className="object-contain flex-center flex-col rounded-md"
                  />
                </div>
              </div>
            ))}
            <div
              id="slide-6" // Should be value greater than 1 of last slide
              className={`hidden md:block slide text-white text-center lg:text-start title-slide ${
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
