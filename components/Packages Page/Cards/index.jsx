"use client";
import { useState } from "react";
import "./style.css";

const PackageCards = () => {
  const [showMoreTamanga, setShowMoreTamanga] = useState(false);
  const [showMoreTamangaPro, setShowMoreTamangaPro] = useState(false);
  const [showMoreTiyeTiye, setShowMoreTiyeTiye] = useState(false);

  return (
    <div className="packages-container relative pt-10">
      <div className="package">
        <h3>Tamanga</h3>
        <div className="text-[var(--brand-color-1)] bg-[var(--brand-color-5)]">
          <p>
            Logo Architecture Letterhead design Email Signature Design & Set up
            Business Cards Design (100 Print) Social Media Starter Kit
          </p>
          <h4 className={`${showMoreTamanga ? "h-full" : "h-0 opacity-0"}`}>
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
          <p>
            Logo Architecture Letterhead design Email Signature Design & Set up
            Business Cards Design (100 Print) Social Media Starter Kit
            Powerpoint Presentation Template Company Profile Brand Manual
          </p>
          <h4 className={`${showMoreTamangaPro ? "h-full" : "h-0 opacity-0"}`}>
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
          <p>
            Logo Architecture Letterhead design Email Signature Design & set up
            Business Cards Design (100 Print) Social Media Starter Kit
            Powerpoint Presentation Template Company Profile Brand Manual
            Website Design and Development
          </p>
          <h4 className={`${showMoreTiyeTiye ? "h-full" : "h-0 opacity-0"}`}>
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
