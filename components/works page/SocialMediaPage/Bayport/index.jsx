import BayportLogo from "@/public/Client Logos/bayport color.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Socials from "../Socials";

const Bayport = () => {
  return (
    <div className="section bg-white h-screen" id="bayport-socials">
      <div className="h-full flex-center flex-col lg:flex-row">
        <div className="h-[70%] lg:w-1/2 lg:h-full flex items-end lg:items-center px-5 pb-10 lg:pb-0 lg:pl-5">
          <Image
            id="works-default-bg"
            src={BayportLogo}
            alt=""
            quality={100}
            className="w-full"
          />
        </div>

        <div className="bg-[#0f397c] font-bold lg:font-normal text-white h-full w-full lg:w-1/2 flex-center flex-col lg:pl-10 lg:ml-5 gap-5 lg:gap-10 overflow-y-auto lg:rounded-tl-full lg:rounded-tr-none lg:rounded-bl-full">
          <p className="lg:text-xl text-center lg:text-center lg:pt-[15vh]">
            Our management of Bayport Financial Services Zambia&apos;s Facebook
            and LinkedIn pages led to significant growth in followers and leads
            within three months, demonstrating our ability to drive organic
            engagement and generate quality leads without relying on paid
            advertisements.
          </p>
          <Socials facebook="https://www.facebook.com/BayportZM?mibextid=LQQJ4d" linkedin="https://www.linkedin.com/company/bayport-zambia/" />
        </div>
      </div>
    </div>
  );
};

export default Bayport;
