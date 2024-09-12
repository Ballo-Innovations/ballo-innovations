// compress ballo logo pattern
import background from "@/public/Backgrounds/bi-logo-pattern.png";
import Image from "next/image";
import "./style.css";
import GetQuouteForm from "./GetQuoteForm";
import PackageCards from "./Cards";

const PackagesPage = () => {
  return (
    <main className="max-w-[w-100vw] overflow-hidden">
      <section
        className="relative text-white nav-padding pb-20 bg-[var(--brand-color-1)] overflow-hidden"
        style={{ paddingTop: "25dvh" }}
        id="packages-section"
      >
        <Image
          src={background}
          alt="background"
          quality={100}
          className="h-screen md:h-auto fixed scale-[1] md:scale-[2.3] -left-[25%] md:-left-[12.25%] top-0 object-cover overflow-visible opacity-[0.12]"
        />

        <div className="z-[2] px-[0.5em] md:px-[5em] mt-10">
          <h2 className="text-center md:text-left text-[3em] font-bold relative md:mb-10 lg:mb-0">
            Business Starter Packages
          </h2>

          <PackageCards />

          <button className="text-[1.25em] font-bold border-white border-[3px] rounded-full px-14 py-2 z-[2] my-12">
            DOWNLOAD OUR RATE CARD
          </button>

          <h2 className="font-bold text-[3em]">Or, Get Detailed Quote</h2>

          <GetQuouteForm />
        </div>
      </section>
    </main>
  );
};

export default PackagesPage;
