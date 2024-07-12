"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import "./style.css";
import background from "@/public/team/lines-pattern.png";
import linkedin from "@/public/elements small/linkedin-rect.png";
import instagram from "@/public/elements small/instagram-solid.png";
import facebook from "@/public/elements small/facebook-rect.png";
import Link from "next/link";

const Popup = ({ toggleDetails, photo, name, position, bg, description }) => {
  useGSAP(() => {
    gsap.to(".fade-in", {
      opacity: 1,
      ease: "back.in",
      delay: 0.15,
      duration: 0.25,
    });
  }, []);
  return (
    <>
      <button
        onClick={toggleDetails}
        className="fade-in fixed top-28 right-5 md:right-10 p-0 rounded-full z-30 opacity-0 bg-white scale-125 md:scale-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
        >
          <path
            fill="#000000"
            d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
          ></path>
        </svg>
      </button>
      <div className="fade-in popup z-20 h-[100vh] w-[100vw] cursor-auto fixed flex-center overflow-x-hidden overflow-y-auto opacity-0">
        <div className="relative overflow-visible ">
          <div className="team-member-content relative flex flex-col md:flex-row w-screen min-h-[100vh] bg-gradient-to-l from-blue-400 to-[var(--brand-color-3)]">
            <div className="team-socials gap-1 flex-center flex-col absolute left-5 top-[33.33%] md:top-[33.333%] z-30">
              <Link
                href="#"
                onClick={toggleDetails}
                className="hover:scale-125"
              >
                <Image src={linkedin} alt="linkedin" className="w-10" />{" "}
              </Link>
              <Link href="#" onClick={toggleDetails}>
                <Image src={instagram} alt="instagram" className="w-10" />{" "}
              </Link>
              <Link href="#" onClick={toggleDetails}>
                <Image src={facebook} alt="facebook" className="w-10" />{" "}
              </Link>
            </div>

            <Image
              src={photo}
              alt={name}
              quality={100}
              className="team-member-photo w-full md:w-[40vw] z-10 relative"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />

            <div className="relative w-full bg-gradient-to-l from-blue-400 to-[var(--brand-color-3)]">
              <Image
                src={bg}
                alt={name}
                // className="absolute top-0 left-0 w-full h-3/5 rounded-bl-2xl rounded-br-2xl"
                className="absolute h-full opacity-20 z-[0] right-0 brightness-[0.3] blur-[2px]"
                style={{ objectFit: "cover", objectPosition: "top 20%" }}
              />
              <div className="px-2 md:px-10 pt-10 md:pt-28 justify-center flex-col gap-2 text-white z-10 relative">
                <h3 className="font-bold text-4xl">{name}</h3>
                <h4 className="font-bold">{position}</h4>
                <p className="mt-10">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
