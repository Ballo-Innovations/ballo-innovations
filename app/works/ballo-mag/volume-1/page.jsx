import BalloMagSlider from "@/components/works page/BalloMagPage/ballo mag slider";
import FlipBook from "@/components/works page/BalloMagPage/flip book";
import { balloMag } from "@/constants/works";

const Page = () => {
  const pages = [balloMag[0].frontCover, ...balloMag[0].images, balloMag[0].backCover];
  const url= balloMag[0].filePath
  return (
    <main>      
      <FlipBook pages={pages} url={url} width={500} height={500} />      
      <section className="flex md:hidden h-screen relative blue-black-bg-grandient pr-5">
        <BalloMagSlider pages={pages} />
      </section>
    </main>
  );
};

export default Page;
