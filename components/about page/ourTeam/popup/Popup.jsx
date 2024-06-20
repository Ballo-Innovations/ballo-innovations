"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import "./style.css";

const Popup = ({ toggleDetails, photo, name, position }) => {
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
        className="fade-in bg-red-600 fixed top-24 right-10 p-1 rounded-md z-30 opacity-0"
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
      <div className="fade-in popup z-20 h-[100vh] w-[100vw]  cursor-auto fixed flex-center overflow-auto opacity-0">
        <div className="relative pt-[40vh] overflow-visible">
          <div className="flex-center flex-col pb-10">
            <Image
              src={photo}
              alt={name}
              quality={100}
              className="rounded-full sm:w-[80vh]"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />

            <div className="flex-center flex-col gap-2 text-center">
              <h3 className="font-bold">{name}</h3>
              <p>{position}</p>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
