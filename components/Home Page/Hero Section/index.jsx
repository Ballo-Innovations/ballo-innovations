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
        <Clients />
      </div>
    </section>
  );
};

export default HeroSection;
