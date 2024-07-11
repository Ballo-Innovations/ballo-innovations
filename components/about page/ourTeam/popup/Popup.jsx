"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import "./style.css";
import background2 from "@/public/Ballo Logo New/svg/Ballo logo new-01.svg";
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
        className="fade-in fixed top-24 right-5 md:right-10 p-0 rounded-full z-30 opacity-0 bg-white scale-125 md:scale-100"
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
      <div className="fade-in popup z-20 h-[100vh] w-[100vw] cursor-auto fixed flex-center overflow-auto opacity-0">
        <Image
          src={bg}
          alt={name}
          fill
          // className="absolute top-0 left-0 w-full h-3/5 rounded-bl-2xl rounded-br-2xl"
          className="blur-sm opacity-100"
          style={{ objectFit: "cover", objectPosition: "top 20%" }}
        />
        <div className="relative overflow-visible pt-32 md:pt-[20vh] md:pb-10 ">
          <div className="team-member-content relative flex flex-col md:flex-row justify-between w-screen md:w-[80vw] rounded-sm">
            <div className="team-socials gap-1 flex-center flex-col absolute left-[85%] md:left-5 top-[33.33%] md:top-[33.333%]">
              <Link href="#">
                <Image src={linkedin} alt="linkedin" className="w-10" />{" "}
              </Link>
              <Link href="#">
                <Image src={instagram} alt="instagram" className="w-10" />{" "}
              </Link>
              <Link href="#">
                <Image src={facebook} alt="facebook" className="w-10" />{" "}
              </Link>
            </div>

            <Image
              src={photo}
              alt={name}
              quality={100}
              className="w-full md:w-[35vw]"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />

            <div className="justify-center p-2 w-full flex-col gap-2 bg-blue-400 text-white">
              <h3 className="font-bold text-4xl">{name}</h3>
              <h4 className="font-bold">{position}</h4>
              <p className="mt-10">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
