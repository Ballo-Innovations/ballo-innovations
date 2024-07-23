import background from "@/public/Backgrounds/hero-bg.png";
import Categories from "./categories/Categories";

const Works = () => {
  return (
    <main className="max-w-[w-100vw] overflow-hidden">
      <section
        id="works-section"
        className="text-white pt-[39vh] blue-black-bg-grandient-2"
      >
        <h2 className="font-bold text-7xl mb-12 text-center">Our Works</h2>
        <Categories />
      </section>
    </main>
  );
};

export default Works;
