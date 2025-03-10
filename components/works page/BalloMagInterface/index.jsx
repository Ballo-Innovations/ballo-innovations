import BalloMagSlider from "@/components/works page/BalloMagInterface/ballo mag slider";
import FlipBook from "@/components/works page/BalloMagInterface/flip book";

const BalloMagInterface = ({magIndex, width, height}) => {
  const pages = [magIndex.frontCover, ...magIndex.images, magIndex.backCover];
  const url= magIndex.filePath
  const name = magIndex.name
  return (
    <main>      
      <FlipBook pages={pages} url={url} width={width} height={height} name={name} />      
      <section className="flex md:hidden h-screen relative blue-black-bg-grandient pr-5">
        <BalloMagSlider pages={pages} url={url} name={name} />
      </section>
    </main>
  );
};

export default BalloMagInterface;
