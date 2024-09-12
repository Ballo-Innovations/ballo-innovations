import IVLoungeLogo from "@/public/Client Logos/IV Lounge Social Media.png";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import Socials from "../Socials";

const IVLounge = () => {
  return (
    <div className="section h-full bg-[ivory] overflow-hidden" id="iv-social">
      <div className="flex-center flex-col lg:flex-row-reverse relative h-full overflow-hidden">
        <div className="tilt" />
        <Image
          id="works-default-bg"
          src={IVLoungeLogo}
          alt=""
          quality={100}
          className="w-4/5 lg:w-[45%] relative z-[2]"
        />

        <div className="text-white relative z-[2] w-full lg:w-1/2 flex-center flex-col px-5 lg:px-10 gap-5 lg:gap-10 overflow-y-auto lg:overflow-visible">
          <p className="lg:text-xl text-center lg:text-left lg:pt-[10vh]">
            Our integrated strategy for The IV Lounge&apos;s social media pages
            has driven significant organic and paid growth, attracting new leads
            within just four months. We create compelling content and targeted
            ads to effectively expand their online presence and client base,
            demonstrating measurable business impact.
          </p>
          <Socials instagram="https://www.instagram.com/the_ivloungezm?igsh=MWQxZGVid3I4YmljYQ==" facebook="https://www.facebook.com/profile.php?id=100077034914281&mibextid=LQQJ4d" />        
        </div>
      </div>
    </div>
  );
};

export default IVLounge;
