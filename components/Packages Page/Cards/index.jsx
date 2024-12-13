"use client";
import { useState } from "react";
import "./style.css";
import info from "@/public/elements small/information-svg.png";
import Image from "next/image";

const CheckMark = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const PackageCards = () => {
  const [showMoreTamanga, setShowMoreTamanga] = useState(false);
  const [showMoreTamangaPro, setShowMoreTamangaPro] = useState(false);
  const [showMoreTiyeTiye, setShowMoreTiyeTiye] = useState(false);

  return (
    <div className="packages-container relative pt-10">
      <div className="package">
        <div className="z-80 flex-center gap-3 mt-16 md:mt-0">
          <h3>Base</h3>
          <div class="relative group flex-center">
            <Image
              src={info}
              alt="Ballo Innovations"
              quality={100}
              className="w-6 cursor-pointer"
            />

            <div class="z-10 p-4 absolute -left-[50vw] md:-left-[10vw] top-1/2 mt-6 hidden w-[80vw] md:w-[30vw] md:p-10 text-[1.1rem] bg-gradient-to-br from-[#2e2c6f] to-[#181c9d] border-gray-200 rounded-3xl shadow-2xl shadow-black group-hover:flex justify-center items-center text-white z-80">
              This package offers an affordable yet comprehensive solution for
              startups and small businesses looking to project professionalism
              and build trust with their audience from the outset. Its ideal for
              entrepreneurs or small companies ready to transition from informal
              branding to a cohesive, market-ready corporate identity
            </div>
          </div>
        </div>
        <div className="text-[var(--brand-color-1)] bg-[var(--brand-color-5)]">
          <ul className="text-left">
            <li className="flex">
              <CheckMark color="#020055" />
              <span>Logo Architecture</span>
            </li>
            <li className="flex">
              <CheckMark color="#020055" />
              <span>Letterhead design</span>
            </li>
            <li className="flex">
              <CheckMark color="#020055" />
              <span>Email Signature Design & Set up</span>
            </li>
            <li className="flex">
              <CheckMark color="#020055" />
              <span>Business Cards Design (100 Print)</span>
            </li>
            <li className={`${showMoreTamanga ? "flex" : "hidden opacity-0"}`}>
              <CheckMark color="#020055" />
              <span>Social Media Starter Kit</span>
            </li>
          </ul>
          <h4
            className={`${
              showMoreTamanga ? "flex-center" : "hidden opacity-0"
            }`}
          >
            K7,500
          </h4>
          <button
            className="font-semibold text-sm mt-5 relative w-full h-full"
            onClick={() => {
              setShowMoreTamanga(!showMoreTamanga);
            }}
          >
            <span
              className={`absolute top-0 underline left-0 h-full w-full ${
                showMoreTamanga ? "opacity-0" : "opacity-1"
              }`}
            >
              Show More
            </span>
            <span
              className={`absolute top-0 underline left-0 h-full w-full ${
                !showMoreTamanga ? "opacity-0" : "opacity-1"
              }`}
            >
              Show Less
            </span>
            {/* {showMoreTamanga ? "Show Less" : "Show More"} */}
          </button>
        </div>
      </div>

      <div className="package">
        <div className="z-80 flex-center gap-3 mt-16 md:mt-0">
          <h3>Booster</h3>
          <div class="relative group flex-center">
            <Image
              src={info}
              alt="Ballo Innovations"
              quality={100}
              className="w-6 cursor-pointer"
            />

            <div class="z-10 p-4 absolute -left-[50vw] md:-left-[20vw] top-1/2 mt-6 hidden w-[80vw] md:w-[30vw] md:p-10 text-[1.1rem] bg-gradient-to-br from-[#2e2c6f] to-[#181c9d] border-gray-200 rounded-3xl shadow-2xl shadow-black group-hover:flex justify-center items-center text-white z-80">
              This package offers enhanced tools for businesses aiming to scale,
              ensuring a polished and consistent brand image across all
              touchpoints. It’s ideal for growing businesses seeking to present
              a professional, cohesive identity to investors, partners, and
              clients while maintaining a unified look and feel as they expand
              or rebrand.
            </div>
          </div>
        </div>
        <div className="bg-[var(--brand-color-3)]">
          <ul className="text-left">
            <li className="flex">
              <CheckMark color="white" />
              <span>Logo Architecture</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Letterhead design</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Email Signature Design & Set up</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Business Cards Design (100 Print)</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Social Media Starter Kit</span>
            </li>
            <li
              className={`${showMoreTamangaPro ? "flex" : "hidden opacity-0"}`}
            >
              <CheckMark color="white" />
              <span>Powerpoint Presentation Template</span>
            </li>
            <li
              className={`${showMoreTamangaPro ? "flex" : "hidden opacity-0"}`}
            >
              <CheckMark color="white" />
              <span>Company Profile</span>
            </li>
            <li
              className={`${showMoreTamangaPro ? "flex" : "hidden opacity-0"}`}
            >
              <CheckMark color="white" />
              Brand Manual
            </li>
          </ul>
          <h4
            className={`${
              showMoreTamangaPro ? "flex-center" : "hidden opacity-0"
            }`}
          >
            K15,000
          </h4>
          <button
            className="font-semibold text-sm mt-5 relative w-full h-full"
            onClick={() => {
              setShowMoreTamangaPro(!showMoreTamangaPro);
            }}
          >
            <span
              className={`absolute top-0 underline left-0 h-full w-full ${
                showMoreTamangaPro ? "opacity-0" : "opacity-1"
              }`}
            >
              Show More
            </span>
            <span
              className={`absolute top-0 underline left-0 h-full w-full ${
                !showMoreTamangaPro ? "opacity-0" : "opacity-1"
              }`}
            >
              Show Less
            </span>
            {/* {showMoreTamangaPro ? "Show Less" : "Show More"} */}
          </button>
        </div>
      </div>

      <div className="package mb-28 md:mb-0">
        <div className="z-80 flex-center gap-3 mt-16 md:mt-0">
          <h3>Ballo</h3>
          <div class="relative group flex-center">
            <Image
              src={info}
              alt="Ballo Innovations"
              quality={100}
              className="w-6 cursor-pointer"
            />

            <div class="z-10 p-4 absolute -left-[50vw] md:-left-[15vw] top-1/2 mt-6 hidden w-[80vw] md:w-[30vw] md:p-10 text-[1.1rem] bg-gradient-to-br from-[#2e2c6f] to-[#181c9d] border-gray-200 rounded-3xl shadow-2xl shadow-black group-hover:flex justify-center items-center text-white z-80">
              This package offers a complete and seamless identity solution,
              combining branding essentials with a professional landing website
              that positions your business for maximum visibility and engagement
              in the digital age. It’s perfect for established businesses or
              ambitious startups ready to compete at a high level and create a
              strong impression across physical and digital platforms. It’s
              everything you need, so what’s in your Ballo today?
            </div>
          </div>
        </div>
        <div className="bg-[var(--brand-color-2)]">
          <ul className="text-left">
            <li className="flex">
              <CheckMark color="white" />
              <span>Logo Architecture</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Letterhead design</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Email Signature Design & set up</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Business Cards Design (100 Print)</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Social Media Starter Kit</span>
            </li>
            <li className="flex">
              <CheckMark color="white" />
              <span>Powerpoint Presentation Template</span>
            </li>
            <li className={`${showMoreTiyeTiye ? "flex" : "hidden opacity-0"}`}>
              <CheckMark color="white" />
              <span>Company Profile</span>
            </li>
            <li className={`${showMoreTiyeTiye ? "flex" : "hidden opacity-0"}`}>
              <CheckMark color="white" />
              <span>Brand Manual</span>
            </li>
            <li className={`${showMoreTiyeTiye ? "flex" : "hidden opacity-0"}`}>
              <CheckMark color="white" />
              <span>Website Design and Development</span>
            </li>
          </ul>
          <h4
            className={`${
              showMoreTiyeTiye ? "flex-center" : "hidden opacity-0"
            }`}
          >
            K30,000
          </h4>
          <button
            className="font-semibold text-sm mt-5 relative w-full h-full"
            onClick={() => {
              setShowMoreTiyeTiye(!showMoreTiyeTiye);
            }}
          >
            <span
              className={`absolute top-0 underline left-0 h-full w-full ${
                showMoreTiyeTiye ? "opacity-0" : "opacity-1"
              }`}
            >
              Show More
            </span>
            <span
              className={`absolute top-0 underline left-0 h-full w-full ${
                !showMoreTiyeTiye ? "opacity-0" : "opacity-1"
              }`}
            >
              Show Less
            </span>
            {/* {showMoreTiyeTiye ? "Show Less" : "Show More"} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCards;
