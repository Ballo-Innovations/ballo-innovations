import MudendaCapitalLogo from "@/public/Client Logos/Mudenda Capital Logo to send-03.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "../Socials";

const MudendaCapital = () => {
  return (
    <div className="section bg-black h-screen">
      <div className="flex-center flex-col lg:flex-row">
        <Image
          id="works-default-bg"
          src={MudendaCapitalLogo}
          alt=""
          quality={100}
          className="w-4/5 lg:w-[45%]"
        />

        <div className="text-white w-full lg:w-1/2 flex-center flex-col px-5 lg:px-10 gap-5 lg:gap-10 overflow-y-auto">
          <p className="lg:text-xl text-center lg:text-left">
            Our content strategy for Mudenda Capital Partners&apos; LinkedIn
            page organically grew followers to 1,000 in four months, generating
            new capital deals and leads without paid ads, showcasing our
            expertise in driving engagement and business growth through quality
            content.
          </p>
          <Socials linkedin="https://www.linkedin.com/company/mudenda-capital/" />
        </div>
      </div>
    </div>
  );
};

export default MudendaCapital;
