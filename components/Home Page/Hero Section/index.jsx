// Import Assets
import Clients from "./Clients";
import Cards from "./Cards";
import HeaderText from "./Header Text";
import HeaderImage from "./Header Image";
import "./style.css";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen text-white nav-padding blue-black-bg-grandient"
      style={{ minWidth: "100vw", paddingInline: 0 }}
      id="hero-section"
    >
      <span id="hero-scroll-trigger" className="top-[17vh] md:top[15vh]" />
      <HeaderImage />
      <div id="hero-content-wrapper" className="overflow-visible">
        <HeaderText />
        <Cards />
        <div className="mt-40 px-5 md:px-32">
          <h2 className="subheading mb-5">What We’re About</h2>

          <p className="font-semibold text-base md:w-[41%]">
            Ballo is a word derived from the business streets of Lusaka that
            means &quot;a bag full of things&quot;. We are an omnichannel
            (digital) marketing company that obsesses on giving the very best to
            our clients to ensure the utmost customer satisfaction and return on
            investment.
          </p>
        </div>
        <Clients />
      </div>
    </section>
  );
};

export default HeroSection;
