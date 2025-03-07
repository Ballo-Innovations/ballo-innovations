import BalloMagSlider from "@/components/works page/BalloMagPage/ballo mag slider";
import FlipBook from "@/components/works page/BalloMagPage/flip book";
import { balloMag } from "@/constants/ballo_mag";
import './style.css'

const Page = () => {
  const pages = [balloMag[1].frontCover, ...balloMag[1].images, balloMag[1].backCover];
  const url= balloMag[1].filePath
  return (
    <main>      
      <FlipBook pages={pages} url={url} width={495} height={700} />      
      <section className="flex md:hidden h-screen relative blue-black-bg-grandient pr-5">
        <BalloMagSlider pages={pages} />
      </section>
    </main>
  );
};

export default Page;
