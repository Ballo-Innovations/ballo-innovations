// compress ballo logo pattern
import background from "@/public/Backgrounds/bi-logo-pattern.png";
import Image from "next/image";
import "./style.css";
import GetQuouteForm from "./GetQuoteForm";

const PackagesPage = () => {
  return (
    <main className="max-w-[w-100vw] overflow-hidden">
      <section
        className="relative text-white nav-padding pb-20 bg-[var(--brand-color-1)] overflow-hidden"
        style={{ paddingTop: "25vh" }}
      >
        <Image
          src={background}
          alt="background"
          quality={100}
          className="fixed scale-[2.3] -left-[12.25%] top-0 object-cover overflow-visible opacity-10"
          style={{ height: "125%", width: "125%" }}
        />

        <div className="z-[2] px-[0.5em] md:px-[5em] mt-10">
          <h2 className="text-center md:text-left text-[3em] font-bold relative md:mb-10 lg:mb-0">
            Business Starter Packages
          </h2>

          <div className="packages-container relative pt-10">
            <div className="package">
              <h3>Tamanga</h3>
              <div className="text-[var(--brand-color-1)] bg-[var(--brand-color-5)]">
                <p>
                  Logo Architecture Letterhead design Email Signature Design &
                  Set up Business Cards Design (100 Print) Social Media Starter
                  Kit
                </p>
                <h4>K7,000</h4>
              </div>
            </div>

            <div className="package">
              <h3>Tamanga Pro</h3>
              <div className="bg-[var(--brand-color-3)]">
                <p>
                  Logo Architecture Letterhead design Email Signature Design &
                  Set up Business Cards Design (100 Print) Social Media Starter
                  Kit Powerpoint Presentation Template Company Profile Brand
                  Manual
                </p>
                <h4>K12,500</h4>
              </div>
            </div>

            <div className="package">
              <h3>Tiye Tiye</h3>
              <div className="bg-[var(--brand-color-2)]">
                <p>
                  Logo Architecture Letterhead design Email Signature Design &
                  set up Business Cards Design (100 Print) Social Media Starter
                  Kit Powerpoint Presentation Template Company Profile Brand
                  Manual Website Design and Development
                </p>
                <h4>K25,000</h4>
              </div>
            </div>
          </div>

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
