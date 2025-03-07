import FlipBook from "@/components/flip book";
import { balloMag } from "@/constants/works";

const Page = () => {
  const pages = [balloMag[0].frontCover, ...balloMag[0].images, balloMag[0].backCover];
  const url= balloMag[0].path
  return (
    <main>
      <FlipBook pages={pages} url={url} />
    </main>
  );
};

export default Page;
