"use client";
import { useState } from "react";
import "./style.css";

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
        fill-rule="evenodd"
        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
        clip-rule="evenodd"
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
        <h3>Tamanga</h3>
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
            K7,000
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
        <h3>Tamanga Pro</h3>
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
            K12,500
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

      <div className="package">
        <h3>Tiye Tiye</h3>
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
            K25,000
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
