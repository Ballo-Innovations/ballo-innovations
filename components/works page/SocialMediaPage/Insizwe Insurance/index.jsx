import insizweLogo from "@/public/Client Logos/9.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "../Socials";

const Insizwe = () => {
  return (
    <div className="section bg-gradient-to-b from-red-500 to-red-900 h-screen">
      <div className="flex-center flex-col lg:flex-row-reverse">
        <Image
          id="works-default-bg"
          src={insizweLogo}
          alt=""
          quality={100}
          className="w-4/5 lg:w-[45%]"
        />

        <div className="text-white w-full lg:w-1/2 flex-center flex-col px-5 lg:px-10 gap-5 lg:gap-10 overflow-y-auto">
          <p className="lg:text-xl text-center lg:text-left lg:pt-[15vh]">
            Our strategic management and targeted paid ads for Insizwe Private
            Brokers&apos; social media pages on Facebook, Instagram, and
            LinkedIn led to significant growth in followers, increased office
            foot traffic, and a surge in leads within six months.
          </p>
          <Socials facebook="https://www.facebook.com/profile.php?id=100094460648266&mibextid=LQQJ4d" linkedin="https://www.linkedin.com/company/insizwe/" instagram="https://www.instagram.com/insizwe?igsh=MTZ0bmFodGNpMHlu" />
        </div>
      </div>
    </div>
  );
};

export default Insizwe;
